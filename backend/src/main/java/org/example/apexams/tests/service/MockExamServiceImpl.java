package org.example.apexams.tests.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.courses.repo.CourseRepository;
import org.example.apexams.enrollments.service.EnrollmentService;
import org.example.apexams.tests.dto.MockExamDetailsResponse;
import org.example.apexams.tests.dto.MockExamItemResponse;
import org.example.apexams.tests.dto.MockExamsResponse;
import org.example.apexams.tests.dto.TestAttemptSummary;
import org.example.apexams.tests.entity.TestAttemptEntity;
import org.example.apexams.tests.entity.TestEntity;
import org.example.apexams.tests.entity.enums.TestAttemptStatus;
import org.example.apexams.tests.entity.enums.TestType;
import org.example.apexams.tests.repo.TestAttemptRepository;
import org.example.apexams.tests.repo.TestRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class MockExamServiceImpl implements MockExamService{
    private final CourseRepository courseRepository;
    private final TestRepository testRepository;
    private final TestAttemptRepository testAttemptRepository;
    private final EnrollmentService enrollmentService;

    @Override
    @Transactional(readOnly = true)
    public MockExamsResponse getMockExamsByCourse(UUID courseId, UUID userId) {
        CourseEntity course = courseRepository.findById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("Course not found: " + courseId));

        // Получаем все Mock Exams для курса
        List<TestEntity> mockExams = testRepository.findByCourseIdAndType(courseId, TestType.MOCK_EXAM);

        // Получаем попытки пользователя для этих тестов
        List<UUID> testIds = mockExams.stream().map(TestEntity::getId).toList();
        List<TestAttemptEntity> userAttempts = testAttemptRepository.findByUserIdAndTestIdIn(userId, testIds);

        // Группируем попытки по тестам
        Map<UUID, List<TestAttemptEntity>> attemptsByTest = userAttempts.stream()
                .collect(Collectors.groupingBy(attempt -> attempt.getTest().getId()));

        // Формируем DTO для каждого mock экзамена
        List<MockExamItemResponse> mockExamItems = mockExams.stream()
                .map(test -> {
                    List<TestAttemptEntity> attempts = attemptsByTest.getOrDefault(test.getId(), List.of());

                    return new MockExamItemResponse(
                            test.getId(),
                            test.getTitle(),
                            test.getTimeLimitSec(),
                            test.getMinTier(),
                            test.isPublished(),
                            attempts != null && !attempts.isEmpty()
                    );
                })
                .toList();

        // Считаем общий прогресс
        int totalExams = mockExamItems.size();
        int completedExams = (int) mockExamItems.stream()
                .filter(MockExamItemResponse::isCompleted)
                .count();
        double progressPercentage = totalExams > 0
                ? Math.round((completedExams * 100.0 / totalExams) * 100.0) / 100.0
                : 0.0;

        return new MockExamsResponse(
                courseId,
                course.getTitle(),
                mockExamItems,
                totalExams,
                completedExams,
                progressPercentage
        );
    }

    @Override
    @Transactional(readOnly = true)
    public MockExamDetailsResponse getMockExamDetails(UUID examId, UUID userId) {
        TestEntity test = testRepository.findById(examId)
                .orElseThrow(() -> new IllegalArgumentException("Mock exam not found: " + examId));

        if (test.getType() != TestType.MOCK_EXAM) {
            throw new IllegalArgumentException("Test is not a mock exam");
        }

        UUID courseId = test.getCourse().getId();

        // Проверка доступа
        if (!enrollmentService.hasAccess(userId, courseId)) {
            throw new IllegalStateException("User does not have access to this course");
        }

        // Определяем статус попытки теста и собираем информацию о последней попытке
        TestAttemptStatus testAttemptStatus = null;
        UUID testAttemptId = null;
        TestAttemptSummary testAttemptSummary = null;

        List<TestAttemptEntity> attempts = testAttemptRepository.findAllByUserIdAndTestId(userId, examId);

        if (attempts.isEmpty()) {
            testAttemptStatus = TestAttemptStatus.NOT_STARTED;
        } else {
            TestAttemptEntity lastAttempt = attempts.getLast();
            testAttemptId = lastAttempt.getId();

            if (lastAttempt.getFinishedAt() == null) {
                // Попытка начата, но не завершена
                testAttemptStatus = TestAttemptStatus.IN_PROGRESS;
            } else {
                // Попытка завершена
                testAttemptStatus = TestAttemptStatus.COMPLETED;

                // Парсим resultJson для получения correctCount и totalCount
                String resultJson = lastAttempt.getResultJson();
                if (resultJson != null) {
                    try {
                        ObjectMapper mapper = new ObjectMapper();
                        JsonNode resultNode = mapper.readTree(resultJson);

                        Integer correctCount = resultNode.get("correctCount").asInt();
                        Integer totalCount = resultNode.get("totalCount").asInt();

                        testAttemptSummary = new TestAttemptSummary(
                                correctCount,
                                totalCount,
                                lastAttempt.getScore(),
                                lastAttempt.getFinishedAt()
                        );
                    } catch (Exception e) {
                        log.error("Failed to parse resultJson for attempt {}", lastAttempt.getId(), e);
                    }
                }
            }
        }

        return new MockExamDetailsResponse(
                test.getId(),
                courseId,
                test.getCourse().getTitle(),
                test.getTitle(),
                test.getTimeLimitSec(),
                test.getMinTier(),
                testAttemptId,
                testAttemptStatus,
                testAttemptSummary
        );
    }

}
