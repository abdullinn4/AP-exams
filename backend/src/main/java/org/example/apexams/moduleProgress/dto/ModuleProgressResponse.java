package org.example.apexams.moduleProgress.dto;

import org.example.apexams.moduleProgress.entity.enums.ModuleProgressStatus;

import java.time.Instant;
import java.util.UUID;

public record ModuleProgressResponse(
        UUID id,
        UUID moduleId,
        ModuleProgressStatus status,
        Instant completedAt
) {
}
