package org.example.apexams.dashboard.dto;

import java.util.UUID;

public record ContinueLearningItem(
        UUID courseId,
        String courseTitle,
        UUID moduleId,
        String moduleTitle,
        Double progressPercentage
) {
}
