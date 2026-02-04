package org.example.apexams.tests.dto;

import org.example.apexams.questionBank.entity.enums.QuestionType;

import java.util.UUID;

public record QuestionResultDetail(
        UUID questionId,
        String prompt,
        String imageUrl,
        QuestionType type,
        String optionsJson,  // JSON массив опций для MULTIPLE_CHOICE
        String userAnswer,   // Ответ студента
        String correctAnswer,  // Правильный ответ из answer_key_json
        Boolean isCorrect,   // Правильно ли ответил студент
        String explanation   // Объяснение правильного ответа
) {
}