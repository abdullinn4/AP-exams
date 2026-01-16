package org.example.apexams.dashboard.dto;

public record StatsPreview(
        Integer totalModulesCompleted,
        Integer totalTestsAttempted,
        Double averageTestScore
) {
}
