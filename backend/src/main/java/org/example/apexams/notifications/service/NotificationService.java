package org.example.apexams.notifications.service;

import org.example.apexams.notifications.dto.NotificationResponse;
import org.example.apexams.notifications.entity.enums.NotificationType;

import java.util.List;
import java.util.UUID;

public interface NotificationService {

    // Создание уведомления
    NotificationResponse createNotification(UUID userId, NotificationType type, String payloadJson);

    // Получение всех уведомлений пользователя
    List<NotificationResponse> getUserNotifications(UUID userId);

    // Получение непрочитанных уведомлений
    List<NotificationResponse> getUnreadNotifications(UUID userId);

    // Количество непрочитанных уведомлений
    long getUnreadCount(UUID userId);

    // Пометить уведомление как прочитанное
    NotificationResponse markAsRead(UUID notificationId);

    // Пометить все уведомления пользователя как прочитанные
    void markAllAsRead(UUID userId);

    // Удаление уведомления
    void deleteNotification(UUID notificationId);
}
