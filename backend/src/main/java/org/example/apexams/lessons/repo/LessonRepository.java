package org.example.apexams.lessons.repo;

import org.example.apexams.lessons.entity.LessonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface LessonRepository extends JpaRepository<LessonEntity, UUID> {
    List<LessonEntity> findByUnitIdOrderByOrderIndex(UUID unitId);
    List<LessonEntity> findByUnitIdIn(List<UUID> unitIds);
    @Query("""
    SELECT l FROM LessonEntity l
    JOIN l.unit u
    WHERE u.course.id = :courseId
    ORDER BY u.orderIndex ASC, l.orderIndex ASC
    """)
    List<LessonEntity> findAllByCourseIdOrderByUnitAndLesson(@Param("courseId") UUID courseId);

}
