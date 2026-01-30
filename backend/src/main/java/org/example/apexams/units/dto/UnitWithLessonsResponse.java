package org.example.apexams.units.dto;

import org.example.apexams.lessons.dto.LessonWithProgressResponse;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

public record UnitWithLessonsResponse(
        UUID id,
        UUID courseId,
        String title,
        String snippet,
        String description,
        String iconUrl,
        Integer orderIndex,
        Boolean isPublished,
        Instant createdAt,
        Instant updatedAt,

        List<LessonWithProgressResponse> lessons,
        Integer totalLessons,
        Integer completedLessons,
        Double progressPercentage
) {
}
