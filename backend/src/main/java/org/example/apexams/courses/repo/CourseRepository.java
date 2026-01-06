package org.example.apexams.courses.repo;

import org.example.apexams.courses.entity.CourseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CourseRepository extends JpaRepository<CourseEntity, UUID> {
    Optional<CourseEntity> findBySlug(String slug);

    boolean existsBySlug(String slug);
}
