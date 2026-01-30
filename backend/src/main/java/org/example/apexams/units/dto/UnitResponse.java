package org.example.apexams.units.dto;

import java.time.Instant;
import java.util.UUID;

public record UnitResponse(
        UUID id,
        UUID courseId,
        String title,
        String snippet,
        String description,
        String iconUrl,
        Integer orderIndex,
        Boolean isPublished,
        Integer lessonsCount,  // Вычисляется динамически
        Instant createdAt,
        Instant updatedAt
) {
}