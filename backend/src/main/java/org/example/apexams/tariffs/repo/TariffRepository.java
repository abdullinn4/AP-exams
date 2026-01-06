package org.example.apexams.tariffs.repo;

import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.tariffs.entity.enums.TariffTier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface TariffRepository extends JpaRepository<TariffEntity, UUID> {
    List<TariffEntity> findByCourseId(UUID courseId);
    Optional<TariffEntity> findByCourseIdAndTier(UUID course_id, TariffTier tier);
}
