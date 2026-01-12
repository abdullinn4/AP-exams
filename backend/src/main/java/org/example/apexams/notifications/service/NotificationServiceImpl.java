package org.example.apexams.notifications.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.mapper.NotificationMapper;
import org.example.apexams.notifications.dto.NotificationResponse;
import org.example.apexams.notifications.entity.NotificationEntity;
import org.example.apexams.notifications.entity.enums.NotificationStatus;
import org.example.apexams.notifications.entity.enums.NotificationType;
import org.example.apexams.notifications.repo.NotificationRepository;
import org.example.apexams.users.entity.UserEntity;
import org.example.apexams.users.repo.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class NotificationServiceImpl implements NotificationService {
    private final NotificationRepository notificationRepository;
    private final UserRepository userRepository;
    private final NotificationMapper notificationMapper;

    @Override
    @Transactional
    public NotificationResponse createNotification(UUID userId, NotificationType type, String payloadJson) {
        UserEntity user = findUserByIdOrThrow(userId);

        NotificationEntity notification = NotificationEntity.builder()
                .user(user)
                .type(type)
                .payloadJson(payloadJson)
                .status(NotificationStatus.UNREAD)
                .build();

        notificationRepository.save(notification);
        log.info("Notification created: user={}, type={}", userId, type);

        return notificationMapper.toDto(notification);
    }

    @Override
    @Transactional(readOnly = true)
    public List<NotificationResponse> getUserNotifications(UUID userId) {
        return notificationRepository.findByUserIdOrderByCreatedAtDesc(userId)
                .stream()
                .map(notificationMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<NotificationResponse> getUnreadNotifications(UUID userId) {
        return notificationRepository.findByUserIdOrderByCreatedAtDesc(userId)
                .stream()
                .filter(n -> n.getStatus() == NotificationStatus.UNREAD)
                .map(notificationMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public long getUnreadCount(UUID userId) {
        return notificationRepository.countByUserIdAndStatus(userId, NotificationStatus.UNREAD);
    }

    @Override
    @Transactional
    public NotificationResponse markAsRead(UUID notificationId, UUID userId) {
        NotificationEntity notification = notificationRepository.findByUserIdAndId(userId, notificationId)
                .orElseThrow(() -> new IllegalArgumentException("Notification not found: " + notificationId));

        if (notification.getStatus() == NotificationStatus.UNREAD) {
            notification.setStatus(NotificationStatus.READ);
            notificationRepository.save(notification);
            log.debug("Notification marked as read: {}", notificationId);
        }

        return notificationMapper.toDto(notification);
    }

    @Override
    @Transactional
    public void markAllAsRead(UUID userId) {
        List<NotificationEntity> unreadNotifications = notificationRepository
                .findByUserIdOrderByCreatedAtDesc(userId)
                .stream()
                .filter(n -> n.getStatus() == NotificationStatus.UNREAD)
                .collect(Collectors.toList());

        unreadNotifications.forEach(n -> n.setStatus(NotificationStatus.READ));
        notificationRepository.saveAll(unreadNotifications);

        log.info("Marked {} notifications as read for user {}", unreadNotifications.size(), userId);
    }

    @Override
    @Transactional
    public void deleteNotification(UUID notificationId) {
        NotificationEntity notification = findNotificationByIdOrThrow(notificationId);
        notificationRepository.delete(notification);
        log.info("Notification deleted: {}", notificationId);
    }

    private NotificationEntity findNotificationByIdOrThrow(UUID notificationId) {
        return notificationRepository.findById(notificationId)
                .orElseThrow(() -> new IllegalArgumentException("Notification not found: " + notificationId));
    }

    private UserEntity findUserByIdOrThrow(UUID userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + userId));
    }
}
