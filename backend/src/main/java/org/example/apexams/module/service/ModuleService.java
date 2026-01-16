package org.example.apexams.module.service;

import org.example.apexams.module.dto.CreateModuleRequest;
import org.example.apexams.module.dto.ModuleDetailsResponse;
import org.example.apexams.module.dto.ModuleResponse;
import org.example.apexams.module.dto.ModuleWithProgressResponse;
import org.example.apexams.module.entity.ModuleEntity;

import java.util.List;
import java.util.UUID;

public interface ModuleService {
    ModuleEntity createModule(CreateModuleRequest dto);

    ModuleResponse getModule(UUID id);

    List<ModuleResponse> getModulesByCourse(UUID courseId);

    // Получение модуля с проверкой доступа (для студента)
    ModuleDetailsResponse getModuleDetails(UUID moduleId, UUID userId);

    // Получение модулей с прогрессом (для студента)
    List<ModuleWithProgressResponse> getModulesWithProgressList(UUID courseId, UUID userId);

    // Обновление модуля (админ)
    void updateModule(UUID id, CreateModuleRequest dto);

    // Изменение порядка модулей (админ)
    void reorderModules(UUID courseId, List<UUID> moduleIds);

    // Удаление модуля (админ)
    void deleteModule(UUID id);

    // Проверка доступа к модулю (учитывая release_at)
    boolean isModuleAvailable(UUID moduleId, UUID userId);
}
