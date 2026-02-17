package org.example.apexams.tests.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.mapper.QuestionMapper;
import org.example.apexams.common.mapper.TestMapper;
import org.example.apexams.enrollments.service.EnrollmentService;
import org.example.apexams.questionBank.dto.QuestionForStudentResponse;
import org.example.apexams.questionBank.entity.QuestionEntity;
import org.example.apexams.questionBank.service.QuestionService;
import org.example.apexams.tariffs.entity.enums.TariffTier;
import org.example.apexams.tests.dto.TestResponse;
import org.example.apexams.tests.entity.TestEntity;
import org.example.apexams.tests.entity.TestQuestionEntity;
import org.example.apexams.tests.repo.TestQuestionRepository;
import org.example.apexams.tests.repo.TestRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class TestServiceImpl implements TestService {
    private final TestRepository testRepository;
    private final TestQuestionRepository testQuestionRepository;
    private final TestMapper testMapper;
    private final QuestionMapper questionMapper;
    private final EnrollmentService enrollmentService;
    private final QuestionService questionService;

    @Override
    @Transactional(readOnly = true)
    public TestResponse getTest(UUID testId) {
        TestEntity test = findTestByIdOrThrow(testId);
        return testMapper.toDto(test);
    }

    @Override
    @Transactional(readOnly = true)
    public List<TestResponse> getTestsByCourse(UUID courseId) {
        return testRepository.findAllByCourseId(courseId)
                .stream()
                .map(testMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public TestResponse getTestByLesson(UUID lessonId) {
        return testMapper.toDto(testRepository.findByLessonId(lessonId));
    }

    @Override
    @Transactional
    public void publishTest(UUID testId) {
        TestEntity test = findTestByIdOrThrow(testId);

        if (test.isPublished()) {
            log.warn("Test is already published: {}", testId);
            return;
        }

        test.setPublished(true);
        testRepository.save(test);
        log.info("Test published successfully: {}", testId);
    }

    @Override
    @Transactional
    public void unpublishTest(UUID testId) {
        TestEntity test = findTestByIdOrThrow(testId);

        if (!test.isPublished()) {
            log.warn("Test is already unpublished: {}", testId);
            return;
        }

        test.setPublished(false);
        testRepository.save(test);
        log.info("Test unpublished successfully: {}", testId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<TestResponse> getAvailableTestsForUser(UUID userId, UUID courseId) {
        // Проверяем доступ к курсу
        if (!enrollmentService.hasAccess(userId, courseId)) {
            throw new IllegalStateException("User does not have access to this course");
        }

        // Получаем tier пользователя
        Optional<TariffTier> userTierOpt = enrollmentService.getUserTier(userId, courseId);

        // Если нет enrollment - возвращаем пустой список
        if (userTierOpt.isEmpty()) {
            return List.of();
        }

        TariffTier userTier = userTierOpt.get();

        // Фильтруем тесты по tier и публикации
        return testRepository.findAllByCourseId(courseId)
                .stream()
                .filter(TestEntity::isPublished)
                .filter(test -> {
                    // Проверяем что tier пользователя >= min_tier теста
                    if (test.getMinTier() == null) return true;
                    return userTier.ordinal() >= test.getMinTier().ordinal();
                })
                .map(testMapper::toDto)
                .collect(Collectors.toList());
    }


    @Override
    @Transactional(readOnly = true)
    public boolean canUserAccessTest(UUID userId, UUID testId) {
        TestEntity test = findTestByIdOrThrow(testId);

        // Проверка публикации
        if (!test.isPublished()) {
            return false;
        }

        // Проверка доступа к курсу
        if (!enrollmentService.hasAccess(userId, test.getCourse().getId())) {
            return false;
        }

        // Проверка tier
        Optional<TariffTier> userTierOpt = enrollmentService.getUserTier(userId, test.getCourse().getId());
        if (test.getMinTier() != null) {
            if (userTierOpt.isEmpty() || userTierOpt.get().ordinal() < test.getMinTier().ordinal()) {
                return false;
            }
        }

        return true;
    }

    @Override
    @Transactional
    public void addQuestionToTest(UUID testId, UUID questionId, int orderIndex) {
        TestEntity test = findTestByIdOrThrow(testId);
        QuestionEntity question = questionService.generateRandomQuestions(test.getCourse().getId(), 1).get(0);

        // Проверяем что вопрос не добавлен уже
        boolean exists = testQuestionRepository.findAllByTestId(testId)
                .stream()
                .anyMatch(tq -> tq.getQuestion().getId().equals(questionId));

        if (exists) {
            throw new IllegalArgumentException("Question already added to test: " + questionId);
        }

        TestQuestionEntity testQuestion = TestQuestionEntity.builder()
                .test(test)
                .question(question)
                .orderIndex(orderIndex)
                .build();

        testQuestionRepository.save(testQuestion);
        log.info("Question {} added to test {} at position {}", questionId, testId, orderIndex);
    }

    @Override
    @Transactional
    public void removeQuestionFromTest(UUID testId, UUID questionId) {
        List<TestQuestionEntity> testQuestions = testQuestionRepository.findAllByTestId(testId);

        TestQuestionEntity toRemove = testQuestions.stream()
                .filter(tq -> tq.getQuestion().getId().equals(questionId))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException(
                        "Question not found in test: " + questionId));

        testQuestionRepository.delete(toRemove);
        log.info("Question {} removed from test {}", questionId, testId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<QuestionForStudentResponse> getTestQuestions(UUID testId) {
        return testQuestionRepository.findAllByTestIdOrderByOrderIndex(testId)
                .stream()
                .map(TestQuestionEntity::getQuestion)
                .map(questionMapper::toStudentDto)
                .collect(Collectors.toList());
    }

    private TestEntity findTestByIdOrThrow(UUID testId) {
        return testRepository.findById(testId)
                .orElseThrow(() -> new IllegalArgumentException("Test not found: " + testId));
    }
}
