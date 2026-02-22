package org.example.apexams.tests.dto;

import org.example.apexams.tariffs.entity.enums.TariffTier;
import java.util.UUID;

public record MockExamItemResponse(
        UUID id,
        String title,
        int timeLimitSec,
        TariffTier minTier,
        boolean isPublished,

        // Прогресс пользователя
        Boolean isCompleted
) {
}
