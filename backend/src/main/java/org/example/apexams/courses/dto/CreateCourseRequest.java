package org.example.apexams.courses.dto;

import jakarta.validation.constraints.NotBlank;

public record CreateCourseRequest(
        @NotBlank
        String title,

        @NotBlank
        String slug,

        String description,
        String previewVideoUrl,
        String coverUrl,
        String discordInviteUrl
) {
}
