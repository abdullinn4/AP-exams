package org.example.apexams.promocodes.repo;

import org.example.apexams.promocodes.entity.PromoCodeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface PromoCodeRepository extends JpaRepository<PromoCodeEntity, UUID> {
    Optional<PromoCodeEntity> findByCodeIgnoreCase(String code);

    boolean existsByCodeIgnoreCase(String code);
}