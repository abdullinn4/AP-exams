package org.example.apexams.common.mapper;

import org.example.apexams.questionBank.dto.CreateQuestionRequest;
import org.example.apexams.questionBank.dto.QuestionForStudentResponse;
import org.example.apexams.questionBank.dto.QuestionResponse;
import org.example.apexams.questionBank.entity.QuestionEntity;
import org.springframework.stereotype.Component;

@Component
public class QuestionMapper {

    // Для админа (с правильными ответами)
    public QuestionResponse toDto(QuestionEntity entity) {
        return new QuestionResponse(
                entity.getId(),
                entity.getPrompt(),
                entity.getOptionsJson(),
                entity.getAnswerKeyJson(),
                entity.getExplanation(),
                entity.getTagsJson(),
                entity.getType()
        );
    }

    // Для студента (БЕЗ правильных ответов)
    public QuestionForStudentResponse toStudentDto(QuestionEntity entity) {
        return new QuestionForStudentResponse(
                entity.getId(),
                entity.getPrompt(),
                entity.getOptionsJson(),
                entity.getType()
        );
    }

    public QuestionEntity toEntity(CreateQuestionRequest dto) {
        return QuestionEntity.builder()
                .tagsJson(dto.tagsJson())
                .type(dto.type())
                .prompt(dto.prompt())
                .optionsJson(dto.optionsJson())
                .answerKeyJson(dto.answerKeyJson())
                .explanation(dto.explanation())
                .build();
    }
}
