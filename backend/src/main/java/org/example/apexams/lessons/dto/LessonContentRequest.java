package org.example.apexams.lessons.dto;

import jakarta.validation.constraints.NotNull;

import java.util.UUID;

public record LessonContentRequest(
        @NotNull
        UUID lessonId,
        String videoPayload,
        String textPayload
) {
}
