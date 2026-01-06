package org.example.apexams.courses.dto;

import java.time.Instant;
import java.util.UUID;

public record CourseResponse(
        UUID id,
        String title,
        String slug,
        String description,
        String previewVideoUrl,
        String coverUrl,
        String status,
        String discordInviteUrl,
        Instant createdAt,
        Instant updatedAt
) {
}
