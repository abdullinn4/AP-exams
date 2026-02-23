package org.example.apexams.stats.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.enrollments.entity.EnrollmentEntity;
import org.example.apexams.enrollments.repo.EnrollmentRepository;
import org.example.apexams.lessons.repo.LessonRepository;
import org.example.apexams.stats.dto.CourseStatisticsResponse;
import org.example.apexams.stats.dto.UserStatisticsResponse;
import org.example.apexams.tests.repo.TestAttemptRepository;
import org.example.apexams.tests.repo.TestRepository;
import org.example.apexams.units.repo.UnitRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class CourseStatisticsServiceImpl implements CourseStatisticsService{
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
        /*List<CourseStatisticsResponse> coursesStats = userCourses.stream()
                .map(course -> calculateCourseStatistics(course, userId))
                .toList();

        return new UserStatisticsResponse(coursesStats);*/
        return null;
    }
}
