package org.example.apexams.enrollments.service;

import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.enrollments.entity.EnrollmentEntity;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.users.entity.UserEntity;

import java.util.UUID;

public interface EnrollmentService {

    EnrollmentEntity enrollUser(
            UserEntity user,
            CourseEntity course,
            TariffEntity tariff
    );

    boolean hasAccess(UUID userId, UUID courseId);

    boolean hasProAccess(UUID userId, UUID courseId);
}
