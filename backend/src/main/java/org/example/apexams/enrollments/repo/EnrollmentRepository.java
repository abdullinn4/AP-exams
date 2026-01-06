package org.example.apexams.enrollments.repo;

import org.example.apexams.enrollments.entity.EnrollmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface EnrollmentRepository
        extends JpaRepository<EnrollmentEntity, UUID> {

    Optional<EnrollmentEntity> findByUserIdAndCourseId(
            UUID userId,
            UUID courseId
    );

    boolean existsByUserIdAndCourseId(UUID userId, UUID courseId);

    List<EnrollmentEntity> findAllByUserId(UUID userId);
}

