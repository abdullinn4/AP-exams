package org.example.apexams.questionBank.service;

import org.example.apexams.questionBank.dto.QuestionForStudentResponse;
import org.example.apexams.questionBank.dto.QuestionResponse;
import org.example.apexams.questionBank.dto.QuestionResultResponse;
import org.example.apexams.questionBank.entity.QuestionEntity;
import org.example.apexams.questionBank.entity.enums.QuestionType;

import java.util.List;
import java.util.UUID;

public interface QuestionService {
    // === Чтение (Admin) ===
    QuestionResponse getQuestion(UUID questionId);
    List<QuestionResponse> getQuestionsByCourse(UUID courseId);
    List<QuestionResponse> getQuestionsByType(UUID courseId, QuestionType type);
    
    // === Для студентов (БЕЗ правильных ответов) ===
    QuestionForStudentResponse getQuestionForStudent(UUID questionId);
    
    // === Валидация ответов ===
    boolean validateAnswer(UUID questionId, String userAnswer);
    QuestionResultResponse checkAnswer(UUID questionId, String userAnswer);
    
    // === Генерация случайных вопросов для Mock Exams ===
    List<QuestionEntity> generateRandomQuestions(UUID courseId, int count);
}
