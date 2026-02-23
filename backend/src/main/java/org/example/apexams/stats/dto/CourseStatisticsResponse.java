package org.example.apexams.stats.dto;

import java.util.List;
import java.util.UUID;

public record CourseStatisticsResponse(
        UUID courseId,
        String courseTitle,
        String courseSlug,

        // Статистика по юнитам (для диаграммы)
        List<UnitStatistics> units,

        // Статистика по mock экзаменам (для диаграммы, идет как отдельный "юнит")
        List<MockExamStatistics> mockExams,

        // Потенциальная оценка
        PotentialGrade potentialGrade,

        // Общая статистика
        Integer totalTestsSolved,
        Double averageCorrectPercentage
) {
}
