package org.example.apexams.lessons.dto;

import org.example.apexams.lessonProgress.entity.enums.LessonProgressStatus;

import java.time.Instant;
import java.util.UUID;

public record LessonWithProgressResponse(
        UUID id,
        UUID unitId,
        String title,
        Integer orderIndex,
        Instant releaseAt,

        LessonProgressStatus progressStatus,
        Instant progressCompletedAt
) {
}
