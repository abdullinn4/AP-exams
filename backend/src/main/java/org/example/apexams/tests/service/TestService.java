package org.example.apexams.tests.service;

import org.example.apexams.questionBank.dto.QuestionForStudentResponse;
import org.example.apexams.tests.dto.TestResponse;
import org.example.apexams.tests.dto.TestWithQuestionsResponse;

import java.util.List;
import java.util.UUID;

public interface TestService {
    // === Чтение (Admin + Student) ===
    TestResponse getTest(UUID testId);
    List<TestResponse> getTestsByCourse(UUID courseId);
    List<TestResponse> getTestsByModule(UUID moduleId);
    
    // === Публикация (Admin) ===
    void publishTest(UUID testId);
    void unpublishTest(UUID testId);
    
    // === Получение тестов для студента ===
    List<TestResponse> getAvailableTestsForUser(UUID userId, UUID courseId);
    TestWithQuestionsResponse getTestWithQuestions(UUID testId, UUID userId);
    
    // === Проверка доступа ===
    boolean canUserAccessTest(UUID userId, UUID testId);
    
    // === Управление вопросами в тесте (Admin) ===
    void addQuestionToTest(UUID testId, UUID questionId, int orderIndex);
    void removeQuestionFromTest(UUID testId, UUID questionId);
    List<QuestionForStudentResponse> getTestQuestions(UUID testId);
}
