package org.example.apexams.lessons.dto;

import java.time.Instant;
import java.util.UUID;

public record LessonResponse(
        UUID id,
        UUID unitId,
        String title,
        Integer orderIndex,
        Instant releaseAt
) {
}
