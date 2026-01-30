package org.example.apexams.lessons.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.Instant;
import java.util.UUID;

public record CreateLessonRequest(
        @NotNull
        UUID unitId,
        @NotBlank
        String title,
        @NotNull
        Integer orderIndex,
        Instant releaseAt
) {
}
