package org.example.apexams.units.repo;

import org.example.apexams.units.entity.UnitEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface UnitRepository extends JpaRepository<UnitEntity, UUID> {
    List<UnitEntity> findByCourseIdOrderByOrderIndex(UUID courseId);
    
    List<UnitEntity> findByCourseIdAndIsPublishedTrueOrderByOrderIndex(UUID courseId);

    //Batch загрузка units для нескольких курсов одним запросом
    @Query("SELECT u FROM UnitEntity u WHERE u.course.id IN :courseIds ORDER BY u.course.id, u.orderIndex")
    List<UnitEntity> findByCourseIdIn(@Param("courseIds") List<UUID> courseIds);
}

