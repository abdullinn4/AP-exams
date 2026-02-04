package org.example.apexams.lessons.dto;

import org.example.apexams.lessonProgress.entity.enums.LessonProgressStatus;
import org.example.apexams.tests.dto.TestAttemptSummary;
import org.example.apexams.tests.entity.enums.TestAttemptStatus;

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
        TestAttemptStatus testAttemptStatus,
        UUID testAttemptId,
        TestAttemptSummary testAttemptSummary,

        Boolean canContactCurator,
        String discordInviteUrl
) {
}
