package org.example.apexams.stats.dto;

import java.util.List;

public record StatsResponse(
        List<ModuleTestStats> moduleTests,
        List<MockExamStats> mockExams,
        OverallStats overall
) {
}
