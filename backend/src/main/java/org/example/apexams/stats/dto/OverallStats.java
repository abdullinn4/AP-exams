package org.example.apexams.stats.dto;

public record OverallStats(
        Integer totalModulesCompleted,
        Integer totalTestsAttempted,
        Integer totalMockExamsAttempted,
        Double averageTestScore,
        Double averageMockExamScore
) {
}
