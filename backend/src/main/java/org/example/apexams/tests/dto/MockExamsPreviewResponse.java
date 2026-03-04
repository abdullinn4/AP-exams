package org.example.apexams.tests.dto;

import java.util.UUID;

public record MockExamsPreviewResponse(
        UUID courseId,
        String courseTitle,
        int totalExams
) {}
