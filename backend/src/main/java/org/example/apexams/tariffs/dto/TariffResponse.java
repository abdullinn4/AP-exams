package org.example.apexams.tariffs.dto;

import org.example.apexams.tariffs.entity.enums.TariffTier;

import java.util.UUID;

public record TariffResponse(
        UUID id,
        UUID courseId,
        String title,
        TariffTier tier,
        Integer priceCents,
        String currency,
        Boolean isActive
) {
}
