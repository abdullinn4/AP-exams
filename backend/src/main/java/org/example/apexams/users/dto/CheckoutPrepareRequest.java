package org.example.apexams.users.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.UUID;

public record CheckoutPrepareRequest(
        @Email
        @NotBlank
        String email,

        @NotBlank
        String discordNickname,

        @NotNull
        UUID tariffId
) {
}
