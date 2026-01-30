package org.example.apexams.units.repo;

import org.example.apexams.units.entity.UnitEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface UnitRepository extends JpaRepository<UnitEntity, UUID> {
    List<UnitEntity> findByCourseIdOrderByOrderIndex(UUID courseId);
    
    List<UnitEntity> findByCourseIdAndIsPublishedTrueOrderByOrderIndex(UUID courseId);
}
