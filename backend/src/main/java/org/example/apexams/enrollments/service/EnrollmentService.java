package org.example.apexams.enrollments.service;

import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.enrollments.dto.EnrollmentResponse;
import org.example.apexams.enrollments.entity.EnrollmentEntity;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.tariffs.entity.enums.TariffTier;
import org.example.apexams.users.entity.UserEntity;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface EnrollmentService {

    EnrollmentEntity enrollUser(
            UserEntity user,
            CourseEntity course,
            TariffEntity tariff
    );

    boolean hasAccess(UUID userId, UUID courseId);

    boolean hasProAccess(UUID userId, UUID courseId);

    // Получение всех записей пользователя (для "My Courses")
    List<EnrollmentResponse> getUserEnrollments(UUID userId);

    // Получение конкретной записи
    Optional<EnrollmentResponse> getEnrollment(UUID userId, UUID courseId);

    // Получение tier пользователя для курса
    Optional<TariffTier> getUserTier(UUID userId, UUID courseId);

    // Отзыв доступа (админ)
    void revokeAccess(UUID enrollmentId);

    // Восстановление доступа (админ)
    void restoreAccess(UUID enrollmentId);

    // Продление доступа (админ, если есть access_to)
    void extendAccess(UUID enrollmentId, Instant newAccessTo);

    // Получение всех записей курса (админ)
    List<EnrollmentResponse> getCourseEnrollments(UUID courseId);

    // Статистика по курсу (админ)
    //EnrollmentStats getCourseStats(UUID courseId);

    void revokeEnrollment(UserEntity user, CourseEntity course);
}
