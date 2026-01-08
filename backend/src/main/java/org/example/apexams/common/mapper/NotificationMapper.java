package org.example.apexams.common.mapper;

import org.example.apexams.notifications.dto.NotificationResponse;
import org.example.apexams.notifications.entity.NotificationEntity;
import org.springframework.stereotype.Component;

@Component
public class NotificationMapper {

    public NotificationResponse toDto(NotificationEntity entity) {
        return new NotificationResponse(
                entity.getId(),
                entity.getType().name(),
                entity.getPayloadJson(),
                entity.getStatus().name(),
                entity.getCreatedAt()
        );
    }
}

