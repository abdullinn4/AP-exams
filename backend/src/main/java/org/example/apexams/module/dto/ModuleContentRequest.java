package org.example.apexams.module.dto;

import jakarta.validation.constraints.NotNull;

import java.util.UUID;

public record ModuleContentRequest(
        @NotNull
        UUID moduleId,
        String videoPayload,
        String textPayload
) {
}
