package org.example.apexams.courses.dto;

import org.example.apexams.courses.entity.enums.CourseStatus;
import org.example.apexams.module.dto.ModuleWithProgressResponse;

import java.util.List;
import java.util.UUID;

public record CourseDetailsResponse(
        UUID id,
        String title,
        String slug,
        String description,
        String previewVideoUrl,
        String coverUrl,
        CourseStatus status,
        String discordInviteUrl,

        List<ModuleWithProgressResponse> modules
) {
}
