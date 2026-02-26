package org.example.apexams.tests.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.exception.ActiveAttemptExistsException;
import org.example.apexams.common.mapper.QuestionMapper;
import org.example.apexams.common.mapper.TestMapper;
import org.example.apexams.lessonProgress.service.LessonProgressService;
import org.example.apexams.notifications.entity.enums.NotificationType;
import org.example.apexams.notifications.service.NotificationService;
import org.example.apexams.questionBank.dto.QuestionForStudentResponse;
import org.example.apexams.questionBank.entity.QuestionEntity;
import org.example.apexams.questionBank.service.QuestionService;
import org.example.apexams.tests.dto.QuestionResultDetail;
import org.example.apexams.tests.dto.StartTestResponse;
import org.example.apexams.tests.dto.TestAttemptResponse;
import org.example.apexams.tests.dto.TestResultDetailsResponse;
import org.example.apexams.tests.entity.TestAttemptEntity;
import org.example.apexams.tests.entity.TestEntity;
import org.example.apexams.tests.entity.TestQuestionEntity;
import org.example.apexams.tests.entity.enums.TestType;
import org.example.apexams.tests.repo.TestAttemptRepository;
import org.example.apexams.tests.repo.TestQuestionRepository;
import org.example.apexams.tests.repo.TestRepository;
import org.example.apexams.users.entity.UserEntity;
import org.example.apexams.users.repo.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class TestAttemptServiceImpl implements TestAttemptService {
    private final TestAttemptRepository attemptRepository;
    private final TestRepository testRepository;
    private final TestQuestionRepository testQuestionRepository;
    private final UserRepository userRepository;
    private final TestMapper testMapper;
    private final QuestionService questionService;
    private final ObjectMapper objectMapper;
    private final NotificationService notificationService;
    private final TestService testService;
    private final QuestionMapper questionMapper;
    private final LessonProgressService lessonProgressService;


    @Transactional
    @Override
    public StartTestResponse startTest(UUID userId, UUID testId) {
        TestEntity test = findTestByIdOrThrow(testId);
        UserEntity user = findUserByIdOrThrow(userId);

        // Проверка доступа к тесту
        if (!testService.canUserAccessTest(userId, testId)) {
            throw new IllegalStateException("User does not have access to this test");
        }

        // 1. Проверяем, есть ли активная попытка (finishedAt IS NULL)
        Optional<TestAttemptEntity> existingAttempt = attemptRepository
                .findActiveAttemptByUserAndTest(userId, testId);

        if (existingAttempt.isPresent()) {
            TestAttemptEntity attempt = existingAttempt.get();

            // 2. Проверяем, не истекло ли время теста
            if (isAttemptExpired(attempt)) {
                // Автоматически завершаем истекшую попытку
                log.info("Auto-finishing expired attempt: attemptId={}", attempt.getId());
                attempt.setFinishedAt(Instant.now());

                // Сохраняем пустые ответы и 0 баллов
                try {
                    attempt.setAnswersJson(objectMapper.writeValueAsString(new HashMap<>()));
                    Map<String, Object> resultJson = new HashMap<>();
                    resultJson.put("correctCount", 0);
                    resultJson.put("totalCount", getTestQuestionCount(testId));
                    resultJson.put("results", new HashMap<>());
                    attempt.setResultJson(objectMapper.writeValueAsString(resultJson));
                } catch (Exception e) {
                    log.error("Error saving expired attempt results: {}", e.getMessage());
                }
                attempt.setScore(0);
                attemptRepository.save(attempt);

                // Создаем новую попытку
                return createNewAttempt(user, test);
            }

            // 3. Возвращаем существующую активную попытку через 409
            log.info("Active attempt exists: attemptId={}", attempt.getId());
            throw new ActiveAttemptExistsException(
                    "Active attempt already exists",
                    mapToStartTestResponse(attempt)
            );
        }
        return createNewAttempt(user, test);
    }

    @Override
    @Transactional
    public TestAttemptResponse submitAttempt(UUID attemptId, Map<UUID, String> answers) {
        TestAttemptEntity attempt = findAttemptByIdOrThrow(attemptId);
        TestEntity test = attempt.getTest();

        if (attempt.getFinishedAt() != null) {
            throw new IllegalStateException("Attempt already submitted: " + attemptId);
        }

        // Получаем вопросы теста
        List<QuestionEntity> questions = testQuestionRepository.findAllByTestIdOrderByOrderIndex(test.getId())
                .stream()
                .map(TestQuestionEntity::getQuestion)
                .toList();

        // Проверяем ответы
        int correctCount = 0;
        Map<String, Boolean> results = new HashMap<>();

        for (QuestionEntity question : questions) {
            String userAnswer = answers.get(question.getId());
            if (userAnswer != null) {
                boolean isCorrect = questionService.validateAnswer(question.getId(), userAnswer);
                if (isCorrect) {
                    correctCount++;
                }
                results.put(question.getId().toString(), isCorrect);
            } else {
                results.put(question.getId().toString(), false);
            }
        }

        // Вычисляем score
        double score = questions.isEmpty() ? 0 : (double) correctCount / questions.size() * 100;

        // Сохраняем результат
        attempt.setFinishedAt(Instant.now());
        try {
            attempt.setAnswersJson(objectMapper.writeValueAsString(answers));

            Map<String, Object> resultJson = new HashMap<>();
            resultJson.put("correctCount", correctCount);
            resultJson.put("totalCount", questions.size());
            resultJson.put("results", results);
            attempt.setResultJson(objectMapper.writeValueAsString(resultJson));
        } catch (Exception e) {
            log.error("Error saving attempt results: {}", e.getMessage());
        }
        attempt.setScore(score);

        attemptRepository.save(attempt);

        if (test.getLesson() != null) {
            try {
                lessonProgressService.completeLesson(attempt.getUser().getId(), test.getLesson().getId());
                log.info("Lesson completed after test submission: userId={}, lessonId={}",
                        attempt.getUser().getId(), test.getLesson().getId());
            } catch (Exception e) {
                log.error("Failed to complete lesson progress: {}", e.getMessage());
            }
        }
        log.info("Test attempt submitted: attemptId={}, score={}", attemptId, score);

        // Создаём уведомление о прохождении теста
        /*try {
            NotificationType notificationType = test.getType() == TestType.MOCK_EXAM
                    ? NotificationType.MOCK_EXAM_RESULT
                    : NotificationType.TEST_PASSED;

            String payload = objectMapper.writeValueAsString(java.util.Map.of(
                    "testId", test.getId().toString(),
                    "testTitle", test.getTitle(),
                    "testType", test.getType().name(),
                    "score", score,
                    "correctCount", correctCount,
                    "totalCount", questions.size(),
                    "courseId", test.getCourse().getId().toString(),
                    "courseName", test.getCourse().getTitle()
            ));

            notificationService.createNotification(attempt.getUser().getId(), notificationType, payload);
        } catch (Exception e) {
            log.error("Failed to create notification for test completion: {}", e.getMessage());
        }*/

        return testMapper.toDto(attempt);
    }

    @Override
    @Transactional(readOnly = true)
    public TestAttemptResponse getAttemptResult(UUID attemptId) {
        TestAttemptEntity attempt = findAttemptByIdOrThrow(attemptId);
        return testMapper.toDto(attempt);
    }

    @Override
    @Transactional(readOnly = true)
    public List<TestAttemptResponse> getUserAttempts(UUID userId, UUID testId) {
        return attemptRepository.findAllByUserIdAndTestId(userId, testId)
                .stream()
                .map(testMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<TestAttemptResponse> getAllUserAttempts(UUID userId) {
        return attemptRepository.findAllByUserId(userId)
                .stream()
                .map(testMapper::toDto)
                .collect(Collectors.toList());
    }


    @Override
    @Transactional
    public void resetAttempts(UUID userId, UUID testId) {
        List<TestAttemptEntity> attempts = attemptRepository.findAllByUserIdAndTestId(userId, testId);
        attemptRepository.deleteAll(attempts);
        log.info("Reset {} attempts for user {} on test {}", attempts.size(), userId, testId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<TestAttemptResponse> getCourseAttempts(UUID courseId) {
        return attemptRepository.findAllByTestCourseId(courseId)
                .stream()
                .map(testMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public TestResultDetailsResponse getTestResultDetails(UUID attemptId, UUID userId) {
        TestAttemptEntity attempt = attemptRepository.findById(attemptId)
                .orElseThrow(() -> new IllegalArgumentException("Test attempt not found: " + attemptId));

        // Проверка что попытка принадлежит пользователю
        if (!attempt.getUser().getId().equals(userId)) {
            throw new IllegalStateException("Access denied to this test attempt");
        }

        // Проверка что тест завершен
        if (attempt.getFinishedAt() == null) {
            throw new IllegalStateException("Test attempt is not finished yet");
        }

        TestEntity test = attempt.getTest();

        // Парсим ответы студента
        Map<UUID, String> userAnswers = new HashMap<>();
        if (attempt.getAnswersJson() != null) {
            try {
                ObjectMapper mapper = new ObjectMapper();
                userAnswers = mapper.readValue(attempt.getAnswersJson(), new TypeReference<Map<UUID, String>>() {});
            } catch (Exception e) {
                log.error("Failed to parse answersJson for attempt {}", attemptId, e);
            }
        }

        // Парсим результаты
        Map<UUID, Boolean> results = new HashMap<>();
        int correctCount = 0;
        int totalCount = 0;

        if (attempt.getResultJson() != null) {
            try {
                ObjectMapper mapper = new ObjectMapper();
                JsonNode resultNode = mapper.readTree(attempt.getResultJson());
                correctCount = resultNode.get("correctCount").asInt();
                totalCount = resultNode.get("totalCount").asInt();

                JsonNode resultsNode = resultNode.get("results");
                resultsNode.fields().forEachRemaining(entry -> {
                    UUID questionId = UUID.fromString(entry.getKey());
                    boolean isCorrect = entry.getValue().asBoolean();
                    results.put(questionId, isCorrect);
                });
            } catch (Exception e) {
                log.error("Failed to parse resultJson for attempt {}", attemptId, e);
            }
        }

        // Получаем все вопросы теста с правильными ответами
        List<TestQuestionEntity> testQuestions = testQuestionRepository.findAllByTestIdOrderByOrderIndex(test.getId());

        List<QuestionResultDetail> questionDetails = new ArrayList<>();

        for (TestQuestionEntity tq : testQuestions) {
            QuestionEntity question = tq.getQuestion();
            UUID questionId = question.getId();

            String userAnswer = userAnswers.getOrDefault(questionId, "");
            Boolean isCorrect = results.getOrDefault(questionId, false);

            questionDetails.add(new QuestionResultDetail(
                    questionId,
                    question.getPrompt(),
                    question.getImageUrl(),
                    question.getType(),
                    question.getOptionsJson(),
                    userAnswer,
                    question.getAnswerKeyJson(),  // Правильный ответ
                    isCorrect,
                    question.getExplanation()
            ));
        }

        return new TestResultDetailsResponse(
                attempt.getId(),
                test.getId(),
                test.getTitle(),
                attempt.getStartedAt(),
                attempt.getFinishedAt(),
                attempt.getScore(),
                correctCount,
                totalCount,
                questionDetails
        );
    }

    private TestAttemptEntity findAttemptByIdOrThrow(UUID attemptId) {
        return attemptRepository.findById(attemptId)
                .orElseThrow(() -> new IllegalArgumentException("Test attempt not found: " + attemptId));
    }

    private TestEntity findTestByIdOrThrow(UUID testId) {
        return testRepository.findById(testId)
                .orElseThrow(() -> new IllegalArgumentException("Test not found: " + testId));
    }

    private UserEntity findUserByIdOrThrow(UUID userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + userId));
    }

    // Проверка истечения времени теста
    private boolean isAttemptExpired(TestAttemptEntity attempt) {
        if (attempt.getStartedAt() == null || attempt.getTest().getTimeLimitSec() == 0) {
            return false;
        }

        Instant expiresAt = attempt.getStartedAt()
                .plusSeconds(attempt.getTest().getTimeLimitSec());

        return Instant.now().isAfter(expiresAt);
    }

    // Создание новой попытки
    private StartTestResponse createNewAttempt(UserEntity user, TestEntity test) {
        // Получаем вопросы из test_questions
        List<QuestionEntity> questions = testQuestionRepository
                .findAllByTestIdOrderByOrderIndex(test.getId())
                .stream()
                .map(TestQuestionEntity::getQuestion)
                .toList();

        // Создаём попытку
        TestAttemptEntity attempt = TestAttemptEntity.builder()
                .test(test)
                .user(user)
                .startedAt(Instant.now())
                .build();

        attemptRepository.save(attempt);
        log.info("Test attempt started: user={}, test={}, attemptId={}",
                user.getId(), test.getId(), attempt.getId());

        return mapToStartTestResponse(attempt);
    }
    // Маппинг в DTO
    private StartTestResponse mapToStartTestResponse(TestAttemptEntity attempt) {
        List<QuestionEntity> questions = testQuestionRepository
                .findAllByTestIdOrderByOrderIndex(attempt.getTest().getId())
                .stream()
                .map(TestQuestionEntity::getQuestion)
                .toList();

        List<QuestionForStudentResponse> questionDtos = questions.stream()
                .map(questionMapper::toStudentDto)
                .collect(Collectors.toList());

        return new StartTestResponse(
                attempt.getId(),
                attempt.getTest().getId(),
                attempt.getTest().getTitle(),
                attempt.getTest().getTimeLimitSec(),
                attempt.getStartedAt(),
                questionDtos
        );
    }

    // Получить количество вопросов
    private int getTestQuestionCount(UUID testId) {
        return testQuestionRepository.findAllByTestIdOrderByOrderIndex(testId).size();
    }
}
