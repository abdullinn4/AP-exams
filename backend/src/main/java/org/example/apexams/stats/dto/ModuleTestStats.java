package org.example.apexams.stats.dto;

import java.time.Instant;
import java.util.UUID;

public record ModuleTestStats(
        UUID testId,
        String testTitle,
        String courseTitle,
        Integer attemptsCount,
        Double bestScore,
        Double lastScore,
        Instant lastAttemptAt
) {
}
