package org.example.apexams.tests.service;

import org.example.apexams.questionBank.dto.QuestionForStudentResponse;
import org.example.apexams.tests.dto.TestResponse;

import java.util.List;
import java.util.UUID;

public interface TestService {
    // === Чтение (Admin + Student) ===
    TestResponse getTest(UUID testId);

    List<TestResponse> getTestsByCourse(UUID courseId);

   TestResponse getTestByLesson(UUID lessonId);

    // === Публикация (Admin) ===
    void publishTest(UUID testId);

    void unpublishTest(UUID testId);

    // === Получение тестов для студента ===
    List<TestResponse> getAvailableTestsForUser(UUID userId, UUID courseId);

    // === Проверка доступа ===
    boolean canUserAccessTest(UUID userId, UUID testId);

    // === Управление вопросами в тесте (Admin) ===
    void addQuestionToTest(UUID testId, UUID questionId, int orderIndex);

    void removeQuestionFromTest(UUID testId, UUID questionId);

    List<QuestionForStudentResponse> getTestQuestions(UUID testId);
}
