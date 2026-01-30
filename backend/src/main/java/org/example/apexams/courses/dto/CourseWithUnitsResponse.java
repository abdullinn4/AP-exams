package org.example.apexams.courses.dto;

import org.example.apexams.courses.entity.enums.CourseStatus;
import org.example.apexams.units.dto.UnitResponse;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

public record CourseWithUnitsResponse(
        UUID id,
        String title,
        String slug,
        String description,
        String snippet,
        String previewVideoUrl,
        String coverUrl,
        CourseStatus status,
        String discordInviteUrl,
        Instant createdAt,
        Instant updatedAt,

        List<UnitResponse> units
) {
}