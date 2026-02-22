package org.example.apexams.tests.dto;

import java.util.List;
import java.util.UUID;

public record MockExamsResponse(
        UUID courseId,
        String courseTitle,
        List<MockExamItemResponse> mockExams,
        Integer totalExams,
        Integer completedExams,
        Double progressPercentage
) {
}