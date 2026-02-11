package org.example.apexams.dashboard.dto;

import org.example.apexams.lessonProgress.entity.enums.LessonProgressStatus;

import java.util.UUID;

public record CourseLessonPreview (
        UUID lessonId,
        String lessonTitle,
        Integer orderIndex,
        UUID unitId,
        String unitTitle,
        LessonProgressStatus status
){
}
