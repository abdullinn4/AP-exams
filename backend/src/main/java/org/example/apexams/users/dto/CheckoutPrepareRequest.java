package org.example.apexams.users.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public record CheckoutPrepareRequest(
        @Email
        @NotBlank
        String email,

        @NotBlank
        String discordNickname,

        @NotEmpty(message = "At least one tariff must be selected")
        List<String> tariffIds,

        @NotNull(message = "Terms acceptance is required")
        Boolean acceptedTerms,

        @NotBlank(message = "Acceptance timestamp is required")
        String acceptedAt // ISO 8601 format
) {
}