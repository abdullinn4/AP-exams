package org.example.apexams.moduleProgress.repo;

import org.example.apexams.moduleProgress.entity.ModuleProgressEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ModuleProgressRepository extends JpaRepository<ModuleProgressEntity, UUID> {
    Optional<ModuleProgressEntity> findByUserIdAndModuleId(UUID userId, UUID moduleId);

    List<ModuleProgressEntity> findAllByUserId(UUID userId);

    List<ModuleProgressEntity> findAllByModuleCourseId(UUID courseId);
}
