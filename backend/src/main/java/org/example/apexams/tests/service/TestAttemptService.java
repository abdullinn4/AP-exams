package org.example.apexams.tests.service;

import org.example.apexams.tests.dto.StartTestResponse;
import org.example.apexams.tests.dto.TestAttemptResponse;

import java.util.List;
import java.util.Map;
import java.util.UUID;

public interface TestAttemptService {
    // === Прохождение тестов (Student) ===
    StartTestResponse startTest(UUID userId, UUID testId);

    TestAttemptResponse submitAttempt(UUID attemptId, Map<UUID, String> answers);

    // === Получение результатов ===
    TestAttemptResponse getAttemptResult(UUID attemptId);

    List<TestAttemptResponse> getUserAttempts(UUID userId, UUID testId);

    List<TestAttemptResponse> getAllUserAttempts(UUID userId);

    // === Проверка лимитов ===
    boolean canUserStartAttempt(UUID userId, UUID testId);

    int getRemainingAttempts(UUID userId, UUID testId);

    // === Админ ===
    void resetAttempts(UUID userId, UUID testId);

    List<TestAttemptResponse> getCourseAttempts(UUID courseId);
}
