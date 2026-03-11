package org.example.apexams.enrollments.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.mapper.EnrollmentMapper;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.enrollments.dto.EnrollmentResponse;
import org.example.apexams.enrollments.entity.EnrollmentEntity;
import org.example.apexams.enrollments.entity.enums.EnrollmentStatus;
import org.example.apexams.enrollments.repo.EnrollmentRepository;
import org.example.apexams.notifications.entity.enums.NotificationType;
import org.example.apexams.notifications.service.NotificationService;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.tariffs.entity.enums.TariffTier;
import org.example.apexams.users.entity.UserEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class EnrollmentServiceImpl implements EnrollmentService {
    private final EnrollmentRepository enrollmentRepository;
    private final EnrollmentMapper enrollmentMapper;
    private final NotificationService notificationService;
    private final ObjectMapper objectMapper;

    @Override
    @Transactional
    public EnrollmentEntity enrollUser(UserEntity user, CourseEntity course, TariffEntity tariff) {
        if (!tariff.getCourse().getId().equals(course.getId())) {
            throw new IllegalArgumentException("Tariff is not for this course");
        }

        if (!tariff.getIsActive()) {
            throw new IllegalArgumentException("Tariff is not active");
        }

        Optional<EnrollmentEntity> existingEnrollment = enrollmentRepository.findByUserIdAndCourseId(user.getId(), course.getId());
        if (existingEnrollment.isPresent()) {
            EnrollmentEntity existing = existingEnrollment.get();

            if (existing.getTier() == TariffTier.BASIC && tariff.getTier() == TariffTier.PRO) {
                log.info("Upgrading user {} from BASIC to PRO for course {}",
                        user.getEmail(), course.getSlug());

                existing.setTier(TariffTier.PRO);
                existing.setTariff(tariff);
                existing.setStatus(EnrollmentStatus.ACTIVE);

                return enrollmentRepository.save(existing);
            }

            if (existing.getTier() == tariff.getTier()) {
                log.warn("User {} already enrolled with tier {} for course {}",
                        user.getEmail(), tariff.getTier(), course.getSlug());
                throw new IllegalStateException(
                        "User already enrolled with tier: " + existing.getTier()
                );
            }

            if (existing.getTier() == TariffTier.PRO && tariff.getTier() == TariffTier.BASIC) {
                throw new IllegalStateException("Downgrade from PRO to BASIC is not allowed");
            }
        }
        EnrollmentEntity enrollmentEntity = EnrollmentEntity.builder()
                .user(user)
                .tariff(tariff)
                .course(course)
                .tier(tariff.getTier())
                .accessFrom(Instant.now())
                .accessTo(null) //бессрочный доступ
                .build();

        log.info("Successfully enrolled user {} to course {} with tier {}",
                user.getEmail(), course.getSlug(), tariff.getTier());

        EnrollmentEntity savedEnrollment = enrollmentRepository.save(enrollmentEntity);

        // Создаём уведомление о покупке курса
        try {
            String payload = objectMapper.writeValueAsString(java.util.Map.of(
                    "courseId", course.getId().toString(),
                    "courseName", course.getTitle(),
                    "tier", tariff.getTier().name()
            ));
            notificationService.createNotification(user.getId(), NotificationType.COURSE_PURCHASED, payload);
        } catch (Exception e) {
            log.error("Failed to create notification for course purchase: {}", e.getMessage());
        }

        return savedEnrollment;
    }

    @Override
    @Transactional(readOnly = true)
    public boolean hasAccess(UUID userId, UUID courseId) {
        return enrollmentRepository
                .findByUserIdAndCourseId(userId, courseId)
                .filter(this::isEnrollmentValid)
                .isPresent();
    }

    @Override
    @Transactional(readOnly = true)
    public boolean hasProAccess(UUID userId, UUID courseId) {
        return enrollmentRepository
                .findByUserIdAndCourseId(userId, courseId)
                .filter(this::isEnrollmentValid)
                .filter(e -> e.getTier() == TariffTier.PRO)
                .isPresent();
    }

    @Override
    @Transactional(readOnly = true)
    public List<EnrollmentResponse> getUserEnrollments(UUID userId) {
        return enrollmentRepository.findAllByUserId(userId)
                .stream()
                .map(enrollmentMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<EnrollmentResponse> getEnrollment(UUID userId, UUID courseId) {
        return enrollmentRepository.findByUserIdAndCourseId(userId, courseId)
                .map(enrollmentMapper::toDto);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<TariffTier> getUserTier(UUID userId, UUID courseId) {
        return enrollmentRepository
                .findByUserIdAndCourseId(userId, courseId)
                .filter(this::isEnrollmentValid)
                .map(EnrollmentEntity::getTier);
    }

    @Override
    @Transactional
    public void revokeAccess(UUID enrollmentId) {
        EnrollmentEntity enrollment = findEnrollmentByIdOrThrow(enrollmentId);

        if (enrollment.getStatus() == EnrollmentStatus.REVOKED) {
            log.warn("Enrollment is already revoked: {}", enrollmentId);
            return;
        }

        enrollment.setStatus(EnrollmentStatus.REVOKED);
        enrollmentRepository.save(enrollment);

        log.warn("Access revoked for enrollment: {} (user: {})", enrollmentId, enrollment.getUser().getEmail());
    }

    @Override
    @Transactional
    public void restoreAccess(UUID enrollmentId) {
        EnrollmentEntity enrollment = findEnrollmentByIdOrThrow(enrollmentId);

        if (enrollment.getStatus() == EnrollmentStatus.ACTIVE) {
            log.warn("Enrollment is already active: {}", enrollmentId);
            return;
        }

        enrollment.setStatus(EnrollmentStatus.ACTIVE);
        enrollmentRepository.save(enrollment);

        log.info("Access restored for enrollment: {} (user: {})", enrollmentId, enrollment.getUser().getEmail());
    }

    @Override
    @Transactional
    public void extendAccess(UUID enrollmentId, Instant newAccessTo) {
        EnrollmentEntity enrollment = findEnrollmentByIdOrThrow(enrollmentId);

        if (newAccessTo != null && newAccessTo.isBefore(Instant.now())) {
            throw new IllegalArgumentException("New access_to date must be in the future");
        }

        enrollment.setAccessTo(newAccessTo);
        enrollmentRepository.save(enrollment);

        log.info("Access extended for enrollment: {} until {}", enrollmentId, newAccessTo);
    }

    @Override
    @Transactional(readOnly = true)
    public List<EnrollmentResponse> getCourseEnrollments(UUID courseId) {
        return enrollmentRepository.findAllByCourseId(courseId)
                .stream()
                .map(enrollmentMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void revokeEnrollment(UserEntity user, CourseEntity course) {
        Optional<EnrollmentEntity> enrollmentOpt = enrollmentRepository.findByUserIdAndCourseId(
                user.getId(),
                course.getId()
        );

        if (enrollmentOpt.isEmpty()) {
            log.warn("No enrollment found to revoke: user={}, course={}",
                    user.getEmail(), course.getSlug());
            return;
        }

        EnrollmentEntity enrollment = enrollmentOpt.get();

        if (enrollment.getStatus() == EnrollmentStatus.REVOKED) {
            log.warn("Enrollment already revoked: user={}, course={}",
                    user.getEmail(), course.getSlug());
            return;
        }

        enrollment.setStatus(EnrollmentStatus.REVOKED);
        enrollment.setAccessTo(Instant.now()); // Закрываем доступ
        enrollmentRepository.save(enrollment);

        log.info("Enrollment revoked: user={}, course={}, previousStatus={}",
                user.getEmail(),
                course.getSlug(),
                enrollment.getStatus());
    }

    private boolean isEnrollmentValid(EnrollmentEntity enrollment) {
        Instant now = Instant.now();

        if (enrollment.getStatus() != EnrollmentStatus.ACTIVE) {
            return false;
        }
        if (enrollment.getAccessFrom() != null && now.isBefore(enrollment.getAccessFrom())) {
            return false;
        }
        if (enrollment.getAccessTo() != null && now.isAfter(enrollment.getAccessTo())) {
            return false;
        }
        return true;
    }

    private EnrollmentEntity findEnrollmentByIdOrThrow(UUID id) {
        return enrollmentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Enrollment not found: " + id));
    }
}
