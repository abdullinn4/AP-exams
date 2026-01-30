package org.example.apexams.lessons.dto;

import org.example.apexams.lessonProgress.entity.enums.LessonProgressStatus;

import java.time.Instant;
import java.util.UUID;

public record LessonDetailsResponse(
        UUID id,
        UUID unitId,
        String title,
        Integer orderIndex,
        Instant releaseAt,

        String videoPayload,
        String textPayload,

        LessonProgressStatus progressStatus,
        Instant progressCompletedAt,

        UUID testId,
        String testTitle,
        Integer testTimeLimitSec,
        Integer testAttemptsLimit,

        Boolean canContactCurator,
        String discordInviteUrl
) {
}
