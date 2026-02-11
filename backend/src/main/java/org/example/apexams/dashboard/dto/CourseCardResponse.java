package org.example.apexams.dashboard.dto;

import java.util.UUID;

public record CourseCardResponse(
        UUID id,
        String title,
        String slug,
        String coverUrl
) {
}
