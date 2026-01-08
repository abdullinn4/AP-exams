package org.example.apexams.moduleProgress.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.mapper.ModuleProgressMapper;
import org.example.apexams.module.entity.ModuleEntity;
import org.example.apexams.module.repo.ModuleRepository;
import org.example.apexams.moduleProgress.dto.ModuleProgressResponse;
import org.example.apexams.moduleProgress.entity.ModuleProgressEntity;
import org.example.apexams.moduleProgress.entity.enums.ModuleProgressStatus;
import org.example.apexams.moduleProgress.repo.ModuleProgressRepository;
import org.example.apexams.notifications.entity.enums.NotificationType;
import org.example.apexams.notifications.service.NotificationService;
import org.example.apexams.users.entity.UserEntity;
import org.example.apexams.users.repo.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class ModuleProgressServiceImpl implements ModuleProgressService {
    private final ModuleProgressRepository progressRepository;
    private final ModuleRepository moduleRepository;
    private final UserRepository userRepository;
    private final ModuleProgressMapper progressMapper;
    private final NotificationService notificationService;
    private final ObjectMapper objectMapper;

    @Override
    @Transactional(readOnly = true)
    public ModuleProgressResponse getProgress(UUID userId, UUID moduleId) {
        ModuleProgressEntity progress = progressRepository.findByUserIdAndModuleId(userId, moduleId)
                .orElseGet(() -> {
                    // Если прогресса нет - создаём с NOT_STARTED
                    ModuleEntity module = findModuleByIdOrThrow(moduleId);
                    UserEntity user = findUserByIdOrThrow(userId);
                    return ModuleProgressEntity.builder()
                            .user(user)
                            .module(module)
                            .status(ModuleProgressStatus.NOT_STARTED)
                            .build();
                });
        return progressMapper.toDto(progress);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ModuleProgressResponse> getUserProgress(UUID userId) {
        return progressRepository.findAllByUserId(userId)
                .stream()
                .map(progressMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<ModuleProgressResponse> getCourseProgress(UUID courseId) {
        return progressRepository.findAllByModuleCourseId(courseId)
                .stream()
                .map(progressMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public ModuleProgressResponse startModule(UUID userId, UUID moduleId) {
        ModuleProgressEntity progress = progressRepository.findByUserIdAndModuleId(userId, moduleId)
                .orElseGet(() -> {
                    ModuleEntity module = findModuleByIdOrThrow(moduleId);
                    UserEntity user = findUserByIdOrThrow(userId);
                    return ModuleProgressEntity.builder()
                            .user(user)
                            .module(module)
                            .status(ModuleProgressStatus.NOT_STARTED)
                            .build();
                });

        if (progress.getStatus() == ModuleProgressStatus.NOT_STARTED) {
            progress.setStatus(ModuleProgressStatus.IN_PROGRESS);
            progressRepository.save(progress);
            log.info("Module started: user={}, module={}", userId, moduleId);
        } else {
            log.debug("Module already started: user={}, module={}, status={}", 
                userId, moduleId, progress.getStatus());
        }

        return progressMapper.toDto(progress);
    }

    @Override
    @Transactional
    public ModuleProgressResponse completeModule(UUID userId, UUID moduleId) {
        ModuleProgressEntity progress = progressRepository.findByUserIdAndModuleId(userId, moduleId)
                .orElseGet(() -> {
                    ModuleEntity module = findModuleByIdOrThrow(moduleId);
                    UserEntity user = findUserByIdOrThrow(userId);
                    return ModuleProgressEntity.builder()
                            .user(user)
                            .module(module)
                            .status(ModuleProgressStatus.NOT_STARTED)
                            .build();
                });

        if (progress.getStatus() != ModuleProgressStatus.COMPLETED) {
            progress.setStatus(ModuleProgressStatus.COMPLETED);
            progress.setCompletedAt(Instant.now());
            progressRepository.save(progress);
            log.info("Module completed: user={}, module={}", userId, moduleId);
            
            // Создаём уведомление о завершении модуля
            try {
                ModuleEntity module = progress.getModule();
                String payload = objectMapper.writeValueAsString(java.util.Map.of(
                    "moduleId", moduleId.toString(),
                    "moduleName", module.getTitle(),
                    "courseId", module.getCourse().getId().toString(),
                    "courseName", module.getCourse().getTitle()
                ));
                notificationService.createNotification(userId, NotificationType.MODULE_COMPLETED, payload);
            } catch (Exception e) {
                log.error("Failed to create notification for module completion: {}", e.getMessage());
            }
        } else {
            log.debug("Module already completed: user={}, module={}", userId, moduleId);
        }

        return progressMapper.toDto(progress);
    }

    @Override
    @Transactional
    public void resetProgress(UUID userId, UUID moduleId) {
        progressRepository.findByUserIdAndModuleId(userId, moduleId)
                .ifPresent(progress -> {
                    progressRepository.delete(progress);
                    log.info("Progress reset: user={}, module={}", userId, moduleId);
                });
    }

    private ModuleEntity findModuleByIdOrThrow(UUID moduleId) {
        return moduleRepository.findById(moduleId)
                .orElseThrow(() -> new IllegalArgumentException("Module not found: " + moduleId));
    }

    private UserEntity findUserByIdOrThrow(UUID userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + userId));
    }
}
