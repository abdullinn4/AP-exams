package org.example.apexams.questionBank.dto;

import org.example.apexams.questionBank.entity.enums.QuestionType;

import java.util.UUID;

//для загрузки через CSV
public record CreateQuestionRequest(
        UUID courseId,
        String tagsJson,
        QuestionType type,
        String prompt,
        String optionsJson,
        String answerKeyJson,
        String explanation
) {}
