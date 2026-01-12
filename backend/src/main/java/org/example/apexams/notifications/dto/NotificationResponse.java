package org.example.apexams.notifications.dto;

import java.time.Instant;
import java.util.UUID;

public record NotificationResponse(
        UUID id,
        String type,
        String payloadJson,
        String status,
        Instant createdAt
) {
}

