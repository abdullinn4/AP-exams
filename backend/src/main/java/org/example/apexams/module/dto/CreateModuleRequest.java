package org.example.apexams.module.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.Instant;
import java.util.UUID;

public record CreateModuleRequest(
        @NotNull
        UUID courseId,
        @NotBlank
        String title,
        @NotNull
        Integer orderIndex,
        Instant releaseAt
) {
}
