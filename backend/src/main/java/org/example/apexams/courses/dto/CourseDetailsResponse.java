package org.example.apexams.courses.dto;

import org.example.apexams.courses.entity.enums.CourseStatus;
import org.example.apexams.lessons.dto.LessonWithProgressResponse;
import org.example.apexams.units.dto.UnitWithLessonsResponse;

import java.util.List;
import java.util.UUID;

public record CourseDetailsResponse(
        UUID id,
        String title,
        String slug,
        String description,
        String snippet,
        String previewVideoUrl,
        String coverUrl,
        CourseStatus status,
        String discordInviteUrl,

        List<UnitWithLessonsResponse> units
) {
}
