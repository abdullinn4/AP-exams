package org.example.apexams.module.dto;

import java.util.UUID;

public record ModuleContentResponse(
        UUID moduleId,
        String videoPayload,
        String textPayload
) {
}
