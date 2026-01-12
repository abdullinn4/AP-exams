package org.example.apexams.questionBank.dto;

import java.util.UUID;

public record QuestionResultResponse(
        UUID questionId,
        boolean isCorrect,
        String correctAnswer,
        String explanation
) {
}
