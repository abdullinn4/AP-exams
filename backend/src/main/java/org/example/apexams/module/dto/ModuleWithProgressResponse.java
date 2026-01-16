package org.example.apexams.module.dto;

import org.example.apexams.moduleProgress.entity.enums.ModuleProgressStatus;

import java.time.Instant;
import java.util.UUID;

public record ModuleWithProgressResponse(
        UUID id,
        UUID courseId,
        String title,
        Integer orderIndex,
        Instant releaseAt,

        ModuleProgressStatus progressStatus,
        Instant progressCompletedAt
) {
}
