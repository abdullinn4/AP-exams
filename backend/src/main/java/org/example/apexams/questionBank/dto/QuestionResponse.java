package org.example.apexams.questionBank.dto;

import org.example.apexams.questionBank.entity.enums.QuestionType;

import java.util.UUID;

public record QuestionResponse(
        UUID id,
        String prompt,
        String optionsJson,
        String answerKeyJson,
        String explanation,
        String tagsJson,
        QuestionType type,
        String imageUrl
) {
}
