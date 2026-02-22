package org.example.apexams.tests.dto;

import org.example.apexams.tariffs.entity.enums.TariffTier;
import org.example.apexams.tests.entity.enums.TestAttemptStatus;

import java.util.UUID;

public record MockExamDetailsResponse(
        UUID id,
        UUID courseId,
        String courseTitle,
        String testTitle,
        Integer timeLimitSec,
        TariffTier minTier,

        // Текущая попытка (если есть)
        UUID testAttemptId,
        TestAttemptStatus testAttemptStatus,
        TestAttemptSummary testAttemptSummary
) {
}