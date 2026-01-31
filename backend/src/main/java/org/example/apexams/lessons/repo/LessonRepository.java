package org.example.apexams.lessons.repo;

import org.example.apexams.lessons.entity.LessonEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface LessonRepository extends JpaRepository<LessonEntity, UUID> {
    List<LessonEntity> findByUnitIdOrderByOrderIndex(UUID unitId);
    List<LessonEntity> findByUnitIds(List<UUID> unitIds);

}
