package org.example.apexams.courses.repo;

import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.courses.entity.enums.CourseStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface CourseRepository extends JpaRepository<CourseEntity, UUID> {
    Optional<CourseEntity> findBySlug(String slug);

    boolean existsBySlug(String slug);

    @Query("SELECT c FROM CourseEntity c WHERE c.status = :status")
    List<CourseEntity> findAllByStatus(@Param("status") CourseStatus status);
}
