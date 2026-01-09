package org.example.apexams.auth.dto;

public record AuthRequest(
        String email,
        String password
) {
}
