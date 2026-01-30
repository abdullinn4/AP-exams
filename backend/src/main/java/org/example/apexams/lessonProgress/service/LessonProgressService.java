package org.example.apexams.lessonProgress.service;

import org.example.apexams.lessonProgress.dto.LessonProgressResponse;

import java.util.List;
import java.util.UUID;

public interface LessonProgressService {

    // Получение прогресса пользователя по уроку
    LessonProgressResponse getProgress(UUID userId, UUID lessonId);

    // Получение всего прогресса пользователя
    List<LessonProgressResponse> getUserProgress(UUID userId);

    // Получение прогресса по курсу (админ)
    List<LessonProgressResponse> getCourseProgress(UUID courseId);

    // Начать урок (статус IN_PROGRESS)
    LessonProgressResponse startLesson(UUID userId, UUID lessonId);

    // Завершить урок (статус COMPLETED)
    LessonProgressResponse completeLesson(UUID userId, UUID lessonId);

    // Сброс прогресса урока (админ)
    void resetProgress(UUID userId, UUID lessonId);
}
