package org.example.apexams.tests.dto;

import java.time.Instant;

public record TestAttemptSummary(
        Integer correctCount,
        Integer totalCount,
        Double score,
        Instant attemptedAt
) {
}