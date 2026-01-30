package org.example.apexams.lessons.service;

import org.example.apexams.lessons.dto.CreateLessonRequest;
import org.example.apexams.lessons.dto.LessonDetailsResponse;
import org.example.apexams.lessons.dto.LessonResponse;
import org.example.apexams.lessons.dto.LessonWithProgressResponse;
import org.example.apexams.lessons.entity.LessonEntity;

import java.util.List;
import java.util.UUID;

public interface LessonService {
    LessonEntity createLesson(CreateLessonRequest dto);

    LessonResponse getLesson(UUID id);

    List<LessonResponse> getLessonsByUnit(UUID unitId);

    // Получение урока с проверкой доступа (для студента)
    LessonDetailsResponse getLessonDetails(UUID lessonId, UUID userId);

    // Получение уроков с прогрессом (для студента)
    List<LessonWithProgressResponse> getLessonsWithProgressList(UUID unitId, UUID userId);

    // Обновление урока (админ)
    void updateLesson(UUID id, CreateLessonRequest dto);

    // Изменение порядка уроков (админ)
    void reorderLessons(UUID unitId, List<UUID> lessonIds);

    // Удаление урока (админ)
    void deleteLesson(UUID id);

    // Проверка доступа к уроку (учитывая release_at)
    boolean isLessonAvailable(UUID lessonId, UUID userId);
}
