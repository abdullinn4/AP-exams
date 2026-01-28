package org.example.apexams.users.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.util.List;
import java.util.UUID;

public record CheckoutPrepareRequest(
        @Email
        @NotBlank
        String email,

        @NotBlank
        String discordNickname,

        @NotEmpty(message = "At least one tariff must be provided")
        List<UUID> tariffIds,

        @NotNull(message = "Variant ID is required")
        String variantId  // Фронт передает либо обычный variant, либо bundle
) {
}