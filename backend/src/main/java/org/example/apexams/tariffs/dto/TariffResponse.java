package org.example.apexams.tariffs.dto;

import org.example.apexams.tariffs.entity.enums.TariffTier;

import java.math.BigDecimal;
import java.util.UUID;

public record TariffResponse(
        UUID id,
        UUID courseId,
        String title,
        TariffTier tier,
        String lemonSqueezyVariantId,
        BigDecimal price,
        String currency,
        Boolean isActive
) {
}
