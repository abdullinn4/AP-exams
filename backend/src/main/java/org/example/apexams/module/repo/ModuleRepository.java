package org.example.apexams.module.repo;

import org.example.apexams.module.entity.ModuleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ModuleRepository extends JpaRepository<ModuleEntity, UUID> {
    List<ModuleEntity> findByCourseIdOrderByOrderIndex(UUID courseId);
}
