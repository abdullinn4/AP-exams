package org.example.apexams.stats.dto;

import java.util.UUID;

public record MockExamStatistics(
        UUID examId,
        String examTitle,

        // Решен ли экзамен
        Boolean isSolved,

        // Процент правильных ответов (null если не решен)
        Double score
) {
}
