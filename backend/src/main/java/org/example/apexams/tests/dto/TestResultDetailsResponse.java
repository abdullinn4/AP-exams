package org.example.apexams.tests.dto;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

public record TestResultDetailsResponse(
        UUID attemptId,
        UUID testId,
        String testTitle,
        Instant startedAt,
        Instant finishedAt,
        Double score,
        Integer correctCount,
        Integer totalCount,
        List<QuestionResultDetail> questions
) {
}