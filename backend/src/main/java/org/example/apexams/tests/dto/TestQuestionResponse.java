package org.example.apexams.tests.dto;

import java.util.UUID;

public record TestQuestionResponse(
        UUID id,
        UUID testId,
        UUID questionId,
        int orderIndex
) {
}
