package org.example.apexams.module.dto;

import java.time.Instant;
import java.util.UUID;

public record ModuleResponse(
        UUID id,
        UUID courseId,
        String title,
        Integer orderIndex,
        Instant releaseAt
) {
}
