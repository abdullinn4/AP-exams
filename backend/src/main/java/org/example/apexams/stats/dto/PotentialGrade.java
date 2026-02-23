package org.example.apexams.stats.dto;

public record PotentialGrade(
        // Можно ли рассчитать оценку (все юниты решены + хотя бы 1 mock exam)
        Boolean canCalculate,

        // Оценка от 1 до 5 (null если canCalculate = false)
        Integer grade,

        // Итоговый процент (среднее между юнитами и mock экзаменами)
        // null если canCalculate = false
        Double percentage
) {
    public static Integer percentageToGrade(double percentage) {
        if (percentage >= 81) return 5;
        if (percentage >= 61) return 4;
        if (percentage >= 41) return 3;
        if (percentage >= 21) return 2;
        return 1;
    }
}
