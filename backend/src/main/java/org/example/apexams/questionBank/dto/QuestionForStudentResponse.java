package org.example.apexams.questionBank.dto;

import org.example.apexams.questionBank.entity.enums.QuestionType;

import java.util.UUID;

public record QuestionForStudentResponse(
        UUID id,
        String prompt,
        String optionsJson,
        QuestionType type
) {}