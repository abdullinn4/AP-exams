package org.example.apexams.lessons.dto;

import java.util.UUID;

public record LessonContentResponse(
        UUID lessonId,
        String videoPayload,
        String textPayload
) {
}
