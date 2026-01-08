package org.example.apexams.tests.dto;

import java.time.Instant;
import java.util.UUID;

public record TestAttemptResponse(
        UUID id,
        UUID testId,
        UUID userId,
        Instant startedAt,
        Instant finishedAt,
        String answersJson,
        double score,
        String resultJson
) {
}
