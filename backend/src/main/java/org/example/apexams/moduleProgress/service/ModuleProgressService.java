package org.example.apexams.moduleProgress.service;

import org.example.apexams.moduleProgress.dto.ModuleProgressResponse;

import java.util.List;
import java.util.UUID;

public interface ModuleProgressService {

    // Получение прогресса пользователя по модулю
    ModuleProgressResponse getProgress(UUID userId, UUID moduleId);

    // Получение всего прогресса пользователя
    List<ModuleProgressResponse> getUserProgress(UUID userId);

    // Получение прогресса по курсу (админ)
    List<ModuleProgressResponse> getCourseProgress(UUID courseId);

    // Начать модуль (статус IN_PROGRESS)
    ModuleProgressResponse startModule(UUID userId, UUID moduleId);

    // Завершить модуль (статус COMPLETED)
    ModuleProgressResponse completeModule(UUID userId, UUID moduleId);

    // Сброс прогресса модуля (админ)
    void resetProgress(UUID userId, UUID moduleId);
}
