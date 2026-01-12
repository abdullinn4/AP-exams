package org.example.apexams.tests.dto;

import org.example.apexams.tariffs.entity.enums.TariffTier;
import org.example.apexams.tests.entity.enums.TestType;

import java.util.UUID;

//для загрузки через CSV
public record CreateTestRequest(
        UUID courseId,
        UUID moduleId, // nullable для Mock Exams
        TestType type,
        String title,
        Integer timeLimitSec,
        Integer attemptsLimit,
        TariffTier minTier
) {
}
