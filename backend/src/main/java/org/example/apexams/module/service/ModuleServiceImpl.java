package org.example.apexams.module.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.mapper.ModuleMapper;
import org.example.apexams.courses.repo.CourseRepository;
import org.example.apexams.enrollments.service.EnrollmentService;
import org.example.apexams.module.dto.CreateModuleRequest;
import org.example.apexams.module.dto.ModuleResponse;
import org.example.apexams.module.entity.ModuleEntity;
import org.example.apexams.module.repo.ModuleRepository;
import org.example.apexams.moduleProgress.dto.ModuleProgressResponse;
import org.example.apexams.moduleProgress.service.ModuleProgressService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class ModuleServiceImpl implements ModuleService {
    private final ModuleRepository moduleRepository;
    private final CourseRepository courseRepository;
    private final ModuleMapper moduleMapper;
    private final EnrollmentService enrollmentService;
    private final ModuleProgressService moduleProgressService;


    @Override
    @Transactional
    public ModuleEntity createModule(CreateModuleRequest dto) {
        var course = courseRepository.findById(dto.courseId())
                .orElseThrow(() -> new IllegalArgumentException("Course not found: " + dto.courseId()));

        ModuleEntity module = moduleMapper.toEntity(dto);
        module.setCourse(course);

        moduleRepository.save(module);
        log.info("Module created successfully: {} (course: {})", module.getTitle(), course.getSlug());
        return module;
    }

    @Override
    @Transactional(readOnly = true)
    public ModuleResponse getModule(UUID id) {
        ModuleEntity module = findModuleByIdOrThrow(id);
        return moduleMapper.toDto(module);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ModuleResponse> getModulesByCourse(UUID courseId) {
        return moduleRepository.findByCourseIdOrderByOrderIndex(courseId).stream()
                .map(moduleMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public ModuleResponse getModuleWithAccess(UUID moduleId, UUID userId) {
        ModuleEntity module = findModuleByIdOrThrow(moduleId);

        // Проверка доступа к курсу
        if (!enrollmentService.hasAccess(userId, module.getCourse().getId())) {
            throw new IllegalStateException("User does not have access to this course");
        }

        // Проверка доступности модуля (release_at)
        if (!isModuleAvailable(moduleId, userId)) {
            throw new IllegalStateException("Module is not available yet");
        }

        return moduleMapper.toDto(module);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ModuleResponse> getModulesWithProgress(UUID courseId, UUID userId) {
        // Проверка доступа к курсу
        if (!enrollmentService.hasAccess(userId, courseId)) {
            throw new IllegalStateException("User does not have access to this course");
        }

        List<ModuleEntity> modules = moduleRepository.findByCourseIdOrderByOrderIndex(courseId);

        // ✅ Получаем весь прогресс пользователя для этого курса
        Map<UUID, ModuleProgressResponse> progressMap = moduleProgressService.getUserProgress(userId)
                .stream()
                .collect(Collectors.toMap(
                        ModuleProgressResponse::moduleId,
                        p -> p
                ));

        return modules.stream()
                /*.map(module -> {
                    ModuleProgressResponse progress = progressMap.get(module.getId());
                    //return moduleMapper.toDtoWithProgress(module, progress);
                })*/
                .map(moduleMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void updateModule(UUID id, CreateModuleRequest dto) {
        ModuleEntity module = findModuleByIdOrThrow(id);

        // Обновляем только не-null поля
        if (dto.title() != null) {
            module.setTitle(dto.title());
        }

        if (dto.orderIndex() != null) {
            module.setOrderIndex(dto.orderIndex());
        }

        if (dto.releaseAt() != null) {
            module.setReleaseAt(dto.releaseAt());
        }

        moduleRepository.save(module);
        log.info("Module updated successfully: {}", module.getTitle());
    }

    @Override
    @Transactional
    public void reorderModules(UUID courseId, List<UUID> moduleIds) {
        // Проверяем что курс существует
        if (!courseRepository.existsById(courseId)) {
            throw new IllegalArgumentException("Course not found: " + courseId);
        }

        // Обновляем order_index для каждого модуля
        for (int i = 0; i < moduleIds.size(); i++) {
            UUID moduleId = moduleIds.get(i);
            ModuleEntity module = findModuleByIdOrThrow(moduleId);

            // Проверяем что модуль принадлежит курсу
            if (!module.getCourse().getId().equals(courseId)) {
                throw new IllegalArgumentException("Module " + moduleId + " does not belong to course " + courseId);
            }

            module.setOrderIndex(i);
            moduleRepository.save(module);
        }

        log.info("Modules reordered successfully for course: {}", courseId);
    }

    @Override
    @Transactional
    public void deleteModule(UUID id) {
        ModuleEntity module = findModuleByIdOrThrow(id);
        moduleRepository.delete(module);
        log.info("Module deleted successfully: {}", id);
    }

    @Override
    @Transactional(readOnly = true)
    public boolean isModuleAvailable(UUID moduleId, UUID userId) {
        ModuleEntity module = findModuleByIdOrThrow(moduleId);

        // Проверка доступа к курсу
        if (!enrollmentService.hasAccess(userId, module.getCourse().getId())) {
            return false;
        }

        // Проверка release_at
        if (module.getReleaseAt() != null && Instant.now().isBefore(module.getReleaseAt())) {
            return false;
        }

        return true;
    }

    private ModuleEntity findModuleByIdOrThrow(UUID id) {
        return moduleRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Module not found: " + id));
    }
}
