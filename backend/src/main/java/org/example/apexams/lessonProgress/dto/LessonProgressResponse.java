package org.example.apexams.lessonProgress.dto;

import org.example.apexams.lessonProgress.entity.enums.LessonProgressStatus;

import java.time.Instant;
import java.util.UUID;

public record LessonProgressResponse(
        UUID id,
        UUID lessonId,
        LessonProgressStatus status,
        Instant completedAt
) {
}
