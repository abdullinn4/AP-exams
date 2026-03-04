package org.example.apexams.courses.dto;

import org.example.apexams.courses.entity.enums.CourseStatus;

import java.time.Instant;
import java.util.UUID;

public record CourseResponse(
        UUID id,
        String title,
        String slug,
        String description,
        String snippet,
        String previewVideoUrl,
        String coverUrl,
        String introVideoUrl,
        String courseImageUrl,
        CourseStatus status,
        String discordInviteUrl,
        Instant createdAt,
        Instant updatedAt
) {
}
