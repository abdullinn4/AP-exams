package org.example.apexams.promocodes.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.UUID;

public record PromoCodeValidationRequest(
        @NotBlank(message = "Promo code is required")
        String code,

        @NotNull(message = "Tariff ID is required")
        UUID tariffId
) {
}
