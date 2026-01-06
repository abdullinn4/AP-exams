package org.example.apexams.users.dto;

import org.example.apexams.users.entity.enums.UserStatus;

import java.time.Instant;
import java.util.UUID;

public record UserResponse(
        UUID id,
        String email,
        String discordNickname,
        UserStatus status,
        Instant createdAt
) {
}
