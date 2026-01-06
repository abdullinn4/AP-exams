package org.example.apexams.enrollments.service;

import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.enrollments.entity.EnrollmentEntity;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.users.entity.UserEntity;

import java.util.UUID;

public class EnrollmentServiceImpl implements EnrollmentService{
    @Override
    public EnrollmentEntity enrollUser(UserEntity user, CourseEntity course, TariffEntity tariff) {
        return null;
    }

    @Override
    public boolean hasAccess(UUID userId, UUID courseId) {
        return false;
    }

    @Override
    public boolean hasProAccess(UUID userId, UUID courseId) {
        return false;
    }
}
