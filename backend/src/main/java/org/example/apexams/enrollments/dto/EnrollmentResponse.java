package org.example.apexams.enrollments.dto;

import org.example.apexams.enrollments.entity.enums.EnrollmentStatus;
import org.example.apexams.tariffs.entity.enums.TariffTier;

import java.time.Instant;
import java.util.UUID;

public record EnrollmentResponse(
        UUID courseId,
        String courseTitle,
        TariffTier tier,
        EnrollmentStatus status,
        Instant accessFrom,
        Instant accessTo
) {
}

