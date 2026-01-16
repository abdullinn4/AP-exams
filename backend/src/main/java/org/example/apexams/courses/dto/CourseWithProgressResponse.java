package org.example.apexams.courses.dto;

import org.example.apexams.tariffs.entity.enums.TariffTier;

import java.util.UUID;

public record CourseWithProgressResponse(
        UUID id,
        String title,
        String slug,
        String coverUrl,
        TariffTier tier,

        Integer totalModules,
        Integer completedModules,
        Double progressPercentage,

        UUID lastAccessedModuleId,
        String lastAccessedModuleTitle
) {
}
