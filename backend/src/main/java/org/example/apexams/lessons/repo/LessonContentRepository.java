package org.example.apexams.lessons.repo;

import org.example.apexams.lessons.entity.LessonContentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface LessonContentRepository extends JpaRepository<LessonContentEntity, UUID> {
}
