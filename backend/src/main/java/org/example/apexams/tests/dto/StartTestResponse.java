package org.example.apexams.tests.dto;

import org.example.apexams.questionBank.dto.QuestionForStudentResponse;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

public record StartTestResponse(
        UUID attemptId,
        UUID testId,
        String testTitle,
        Integer timeLimitSec,
        Instant startedAt,
        List<QuestionForStudentResponse> questions
) {
}