package org.example.apexams.tariffs.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.example.apexams.tariffs.entity.enums.TariffTier;

import java.util.UUID;

public record CreateTariffRequest(
        @NotNull
        UUID courseId,
        @NotBlank
        String title,
        @NotNull
        TariffTier tier,
        @NotNull
        String paddleVariantId,
        @NotNull
        Integer priceCents
) {
}
