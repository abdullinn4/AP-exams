package org.example.apexams.lessons.service;

import org.example.apexams.lessons.dto.LessonContentRequest;
import org.example.apexams.lessons.dto.LessonContentResponse;

import java.util.UUID;

public interface LessonContentService {
    LessonContentResponse upsert(LessonContentRequest dto);

    LessonContentResponse getByLessonId(UUID lessonId);

    // Получение контента с проверкой доступа
    LessonContentResponse getByLessonIdWithAccess(UUID lessonId, UUID userId);

    void delete(UUID lessonId);
}
