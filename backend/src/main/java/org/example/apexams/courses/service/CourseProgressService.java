package org.example.apexams.courses.service;

import org.example.apexams.courses.dto.CourseWithProgressResponse;
import org.example.apexams.enrollments.entity.EnrollmentEntity;
import org.example.apexams.lessonProgress.dto.LessonProgressResponse;
import org.example.apexams.lessons.entity.LessonEntity;

import java.util.List;
import java.util.Map;
import java.util.UUID;

public interface CourseProgressService {

    //Вычисляет прогресс для списка enrollments
    List<CourseWithProgressResponse> calculateProgressForEnrollments(
            List<EnrollmentEntity> enrollments,
            UUID userId
    );

    //Находит последний просмотренный урок из списка
    LessonProgressResponse findLastAccessedLesson(
            List<LessonEntity> lessons,
            Map<UUID, LessonProgressResponse> progressMap
    );
}