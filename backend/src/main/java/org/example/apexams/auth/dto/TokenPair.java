package org.example.apexams.auth.dto;

public record TokenPair(
        String accessToken,
        String refreshToken
) {
}
