package org.example.apexams.users.dto;

public record AuthResponse(
        String accessToken,
        String refreshToken
) {
}
