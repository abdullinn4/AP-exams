package org.example.apexams.tests.dto;

import org.example.apexams.tariffs.entity.enums.TariffTier;

import java.util.UUID;

public record TestResponse(
        UUID id,
        UUID courseId,
        UUID moduleId,
        String title,
        String type,
        int timeLimitSec,
        int attemptsLimit,
        TariffTier minTier,
        boolean isPublished
) {
}
