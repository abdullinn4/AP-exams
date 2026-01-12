package org.example.apexams.tests.dto;

import org.example.apexams.questionBank.dto.QuestionForStudentResponse;

import java.util.List;
import java.util.UUID;

public record TestWithQuestionsResponse(
        UUID testId,
        String title,
        int timeLimitSec,
        int attemptsLimit,
        List<QuestionForStudentResponse> questions
) {
}
