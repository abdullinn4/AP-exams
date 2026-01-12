package org.example.apexams.notifications.repo;

import org.example.apexams.notifications.entity.NotificationEntity;
import org.example.apexams.notifications.entity.enums.NotificationStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface NotificationRepository extends JpaRepository<NotificationEntity, UUID> {
    List<NotificationEntity> findByUserIdOrderByCreatedAtDesc(UUID userId);

    long countByUserIdAndStatus(UUID userId, NotificationStatus status);

    Optional<NotificationEntity> findByUserIdAndId(UUID userId, UUID notificationId);

}
