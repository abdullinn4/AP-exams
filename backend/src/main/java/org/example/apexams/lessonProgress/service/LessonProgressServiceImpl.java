package org.example.apexams.lessonProgress.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.mapper.LessonProgressMapper;
import org.example.apexams.lessonProgress.dto.LessonProgressResponse;
import org.example.apexams.lessonProgress.entity.LessonProgressEntity;
import org.example.apexams.lessonProgress.entity.enums.LessonProgressStatus;
import org.example.apexams.lessonProgress.repo.LessonProgressRepository;
import org.example.apexams.lessons.entity.LessonEntity;
import org.example.apexams.lessons.repo.LessonRepository;
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
public class LessonProgressServiceImpl implements LessonProgressService {
    private final LessonProgressRepository progressRepository;
    private final LessonRepository lessonRepository;
    private final UserRepository userRepository;
    private final LessonProgressMapper progressMapper;
    private final NotificationService notificationService;
    private final ObjectMapper objectMapper;

    @Override
    @Transactional
    public LessonProgressResponse getProgress(UUID userId, UUID lessonId) {
        LessonProgressEntity progress = progressRepository.findByUserIdAndLessonId(userId, lessonId)
                .orElseGet(() -> {
                    // Если прогресса нет - создаём с NOT_STARTED
                    LessonEntity lesson = findLessonByIdOrThrow(lessonId);
                    UserEntity user = findUserByIdOrThrow(userId);
                    LessonProgressEntity newProgress = LessonProgressEntity.builder()
                            .user(user)
                            .lesson(lesson)
                            .status(LessonProgressStatus.NOT_STARTED)
                            .build();

                    progressRepository.save(newProgress);
                    log.info("Created initial progress: user={}, lesson={}, status=NOT_STARTED", userId, lessonId);
                    return newProgress;
                });
        return progressMapper.toDto(progress);
    }

    @Override
    @Transactional(readOnly = true)
    public List<LessonProgressResponse> getUserProgress(UUID userId) {
        return progressRepository.findAllByUserId(userId)
                .stream()
                .map(progressMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<LessonProgressResponse> getCourseProgress(UUID courseId) {
        return progressRepository.findAllByLessonUnitCourseId(courseId)
                .stream()
                .map(progressMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public LessonProgressResponse startLesson(UUID userId, UUID lessonId) {
        LessonProgressEntity progress = progressRepository.findByUserIdAndLessonId(userId, lessonId)
                .orElseGet(() -> {
                    LessonEntity lesson = findLessonByIdOrThrow(lessonId);
                    UserEntity user = findUserByIdOrThrow(userId);
                    return LessonProgressEntity.builder()
                            .user(user)
                            .lesson(lesson)
                            .status(LessonProgressStatus.NOT_STARTED)
                            .build();
                });

        if (progress.getStatus() == LessonProgressStatus.NOT_STARTED) {
            progress.setStatus(LessonProgressStatus.IN_PROGRESS);
            progressRepository.save(progress);
            log.info("Lesson started: user={}, lesson={}", userId, lessonId);
        } else {
            log.debug("Lesson already started: user={}, lesson={}, status={}",
                    userId, lessonId, progress.getStatus());
        }

        return progressMapper.toDto(progress);
    }

    @Override
    @Transactional
    public LessonProgressResponse completeLesson(UUID userId, UUID lessonId) {
        LessonProgressEntity progress = progressRepository.findByUserIdAndLessonId(userId, lessonId)
                .orElseGet(() -> {
                    LessonEntity lesson = findLessonByIdOrThrow(lessonId);
                    UserEntity user = findUserByIdOrThrow(userId);
                    return LessonProgressEntity.builder()
                            .user(user)
                            .lesson(lesson)
                            .status(LessonProgressStatus.NOT_STARTED)
                            .build();
                });

        if (progress.getStatus() != LessonProgressStatus.COMPLETED) {
            progress.setStatus(LessonProgressStatus.COMPLETED);
            progress.setCompletedAt(Instant.now());
            progressRepository.save(progress);
            log.info("Lesson completed: user={}, lesson={}", userId, lessonId);

            /*// Создаём уведомление о завершении урока
            try {
                LessonEntity lesson = progress.getLesson();
                String payload = objectMapper.writeValueAsString(java.util.Map.of(
                        "lessonId", lessonId.toString(),
                        "lessonName", lesson.getTitle(),
                        "unitId", lesson.getUnit().getId().toString()
                ));
                notificationService.createNotification(userId, NotificationType.LESSON_COMPLETED, payload);
            } catch (Exception e) {
                log.error("Failed to create notification for lesson completion: {}", e.getMessage());
            }*/
        } else {
            log.debug("Lesson already completed: user={}, lesson={}", userId, lessonId);
        }

        return progressMapper.toDto(progress);
    }

    @Override
    @Transactional
    public void resetProgress(UUID userId, UUID lessonId) {
        progressRepository.findByUserIdAndLessonId(userId, lessonId)
                .ifPresent(progress -> {
                    progressRepository.delete(progress);
                    log.info("Progress reset: user={}, lesson={}", userId, lessonId);
                });
    }

    private LessonEntity findLessonByIdOrThrow(UUID lessonId) {
        return lessonRepository.findById(lessonId)
                .orElseThrow(() -> new IllegalArgumentException("Lesson not found: " + lessonId));
    }

    private UserEntity findUserByIdOrThrow(UUID userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + userId));
    }
}
