package org.example.apexams.tests.service;

import org.example.apexams.tests.dto.MockExamDetailsResponse;
import org.example.apexams.tests.dto.MockExamsResponse;

import java.util.UUID;

public interface MockExamService {
    MockExamsResponse getMockExamsByCourse(UUID courseId, UUID userId);

    MockExamDetailsResponse getMockExamDetails(UUID examId, UUID userId);
}