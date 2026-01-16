package org.example.apexams.module.dto;

import org.example.apexams.moduleProgress.entity.enums.ModuleProgressStatus;

import java.time.Instant;
import java.util.UUID;

public record ModuleDetailsResponse(
        UUID id,
        UUID courseId,
        String title,
        Integer orderIndex,
        Instant releaseAt,

        String videoPayload,
        String textPayload,

        ModuleProgressStatus progressStatus,
        Instant progressCompletedAt,

        UUID testId,
        String testTitle,
        Integer testTimeLimitSec,
        Integer testAttemptsLimit,

        Boolean canContactCurator,
        String discordInviteUrl
) {
}
