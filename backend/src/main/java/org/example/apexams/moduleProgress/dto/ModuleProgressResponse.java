package org.example.apexams.moduleProgress.dto;

import java.time.Instant;
import java.util.UUID;

public record ModuleProgressResponse(
        UUID moduleId,
        String status,
        Instant completedAt
) {}
