package org.example.apexams.module.repo;

import org.example.apexams.module.entity.ModuleContentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ModuleContentRepository extends JpaRepository<ModuleContentEntity, UUID> {
}
