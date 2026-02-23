package org.example.apexams.stats.dto;

import java.util.UUID;

public record UnitStatistics(
        UUID unitId,
        String unitTitle,
        Integer orderIndex,

        // Количество уроков в юните
        Integer totalLessons,

        // Количество решенных тестов (= завершенных уроков)
        Integer completedLessons,

        // Средний процент правильных ответов по тестам юнита
        // null если ни один тест не решен
        Double averageScore
) {
}
