package org.example.apexams.stats.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.enrollments.entity.EnrollmentEntity;
import org.example.apexams.enrollments.repo.EnrollmentRepository;
import org.example.apexams.lessons.entity.LessonEntity;
import org.example.apexams.lessons.repo.LessonRepository;
import org.example.apexams.stats.dto.*;
import org.example.apexams.tests.entity.TestAttemptEntity;
import org.example.apexams.tests.entity.TestEntity;
import org.example.apexams.tests.entity.enums.TestType;
import org.example.apexams.tests.repo.TestAttemptRepository;
import org.example.apexams.tests.repo.TestRepository;
import org.example.apexams.units.entity.UnitEntity;
import org.example.apexams.units.repo.UnitRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Slf4j
@Service
@RequiredArgsConstructor
public class CourseStatisticsServiceImpl implements CourseStatisticsService {
    private final EnrollmentRepository enrollmentRepository;
    private final UnitRepository unitRepository;
    private final LessonRepository lessonRepository;
    private final TestRepository testRepository;
    private final TestAttemptRepository testAttemptRepository;
    private final ObjectMapper objectMapper;

    @Override
    @Transactional(readOnly = true)
    public UserStatisticsResponse getUserCoursesStatistics(UUID userId) {
        // Получаем все курсы пользователя
        List<CourseEntity> userCourses = enrollmentRepository.findAllByUserId(userId)
                .stream()
                .map(EnrollmentEntity::getCourse)
                .toList();

        // Для каждого курса собираем статистику
        List<CourseStatisticsResponse> coursesStats = userCourses.stream()
                .map(course -> calculateCourseStatistics(course, userId))
                .toList();

        return new UserStatisticsResponse(coursesStats);
    }

    private CourseStatisticsResponse calculateCourseStatistics(CourseEntity course, UUID userId) {
        UUID courseId = course.getId();

        // Получаем все юниты курса
        List<UnitEntity> units = unitRepository.findByCourseIdOrderByOrderIndex(courseId);

        // Получаем все попытки тестов пользователя для этого курса
        List<TestAttemptEntity> allAttempts = testAttemptRepository.findAll()
                .stream()
                .filter(attempt -> attempt.getTest().getCourse().getId().equals(courseId))
                .filter(attempt -> attempt.getUser().getId().equals(userId))
                .filter(attempt -> attempt.getFinishedAt() != null) // Только завершенные
                .toList();

        // Группируем попытки по testId
        Map<UUID, TestAttemptEntity> attemptsByTestId = allAttempts.stream()
                .collect(Collectors.toMap(
                        attempt -> attempt.getTest().getId(),
                        attempt -> attempt,
                        (a1, a2) -> a1 // Если несколько попыток, берем первую (но по условию только одна)
                ));

        // Статистика по юнитам
        List<UnitStatistics> unitStats = units.stream()
                .map(unit -> calculateUnitStatistics(unit, attemptsByTestId))
                .toList();

        // Статистика по mock экзаменам
        List<MockExamStatistics> mockExamStats = calculateMockExamStatistics(courseId, attemptsByTestId);

        // Потенциальная оценка
        PotentialGrade potentialGrade = calculatePotentialGrade(unitStats, mockExamStats);

        // Общая статистика
        int totalTestsSolved = allAttempts.size();
        Double averageCorrectPercentage = calculateAverageCorrectPercentage(allAttempts);

        return new CourseStatisticsResponse(
                courseId,
                course.getTitle(),
                course.getSlug(),
                unitStats,
                mockExamStats,
                potentialGrade,
                totalTestsSolved,
                averageCorrectPercentage
        );
    }

    private UnitStatistics calculateUnitStatistics(
            UnitEntity unit,
            Map<UUID, TestAttemptEntity> attemptsByTestId
    ) {
        // Получаем все уроки юнита
        List<LessonEntity> lessons = lessonRepository.findByUnitIdOrderByOrderIndex(unit.getId());
        int totalLessons = lessons.size();

        // Для каждого урока получаем его тест
        List<TestEntity> lessonTests = lessons.stream()
                .map(lesson -> testRepository.findByLessonId(lesson.getId()))
                .flatMap(test -> test != null ? Stream.of(test) : Stream.empty())
                .toList();

        // Считаем сколько тестов решено
        int completedLessons = 0;
        List<Double> scores = new ArrayList<>();

        for (TestEntity test : lessonTests) {
            TestAttemptEntity attempt = attemptsByTestId.get(test.getId());
            if (attempt != null) {
                completedLessons++;

                // Извлекаем процент правильных ответов из resultJson
                Double correctPercentage = extractCorrectPercentage(attempt);
                if (correctPercentage != null) {
                    scores.add(correctPercentage);
                }
            }
        }

        // Средний процент по юниту (null если ни один тест не решен)
        Double averageScore = scores.isEmpty() ? null :
                scores.stream().mapToDouble(Double::doubleValue).average().orElse(0.0);

        return new UnitStatistics(
                unit.getId(),
                unit.getTitle(),
                unit.getOrderIndex(),
                totalLessons,
                completedLessons,
                averageScore
        );
    }

    private List<MockExamStatistics> calculateMockExamStatistics(
            UUID courseId,
            Map<UUID, TestAttemptEntity> attemptsByTestId
    ) {
        // Получаем все mock экзамены курса
        List<TestEntity> mockExams = testRepository.findByCourseIdAndType(courseId, TestType.MOCK_EXAM);

        return mockExams.stream()
                .map(exam -> {
                    TestAttemptEntity attempt = attemptsByTestId.get(exam.getId());
                    boolean isSolved = attempt != null;
                    Double score = isSolved ? extractCorrectPercentage(attempt) : null;

                    return new MockExamStatistics(
                            exam.getId(),
                            exam.getTitle(),
                            isSolved,
                            score
                    );
                })
                .toList();
    }

    private PotentialGrade calculatePotentialGrade(
            List<UnitStatistics> unitStats,
            List<MockExamStatistics> mockExamStats
    ) {
        // Проверяем условия для расчета оценки:
        // 1. Все юниты решены (все уроки завершены)
        boolean allUnitsCompleted = unitStats.stream()
                .allMatch(unit -> unit.completedLessons().equals(unit.totalLessons()));

        // 2. Хотя бы один mock экзамен решен
        boolean atLeastOneMockExamSolved = mockExamStats.stream()
                .anyMatch(MockExamStatistics::isSolved);

        if (!allUnitsCompleted || !atLeastOneMockExamSolved) {
            return new PotentialGrade(false, null, null);
        }

        // Рассчитываем среднее по юнитам
        Double averageUnitsScore = unitStats.stream()
                .map(UnitStatistics::averageScore)
                .filter(Objects::nonNull)
                .mapToDouble(Double::doubleValue)
                .average()
                .orElse(0.0);

        // Рассчитываем среднее по решенным mock экзаменам
        Double averageMockExamsScore = mockExamStats.stream()
                .filter(MockExamStatistics::isSolved)
                .map(MockExamStatistics::score)
                .filter(Objects::nonNull)
                .mapToDouble(Double::doubleValue)
                .average()
                .orElse(0.0);

        // Итоговый процент = среднее между юнитами и mock экзаменами
        double finalPercentage = (averageUnitsScore + averageMockExamsScore) / 2.0;

        // Конвертируем в оценку
        Integer grade = PotentialGrade.percentageToGrade(finalPercentage);

        return new PotentialGrade(true, grade, finalPercentage);
    }

    private Double extractCorrectPercentage(TestAttemptEntity attempt) {
        try {
            JsonNode resultNode = objectMapper.readTree(attempt.getResultJson());
            int correctCount = resultNode.get("correctCount").asInt();
            int totalCount = resultNode.get("totalCount").asInt();

            if (totalCount == 0) return 0.0;

            return (correctCount * 100.0) / totalCount;
        } catch (Exception e) {
            log.error("Failed to parse resultJson for attempt {}", attempt.getId(), e);
            return null;
        }
    }

    private Double calculateAverageCorrectPercentage(List<TestAttemptEntity> attempts) {
        if (attempts.isEmpty()) return null;

        return attempts.stream()
                .map(this::extractCorrectPercentage)
                .filter(Objects::nonNull)
                .mapToDouble(Double::doubleValue)
                .average()
                .orElse(0.0);
    }

}
