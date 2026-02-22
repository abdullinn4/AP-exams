package org.example.apexams.notifications.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.apexams.config.security.details.UserDetailsImpl;
import org.example.apexams.notifications.dto.NotificationResponse;
import org.example.apexams.notifications.dto.SystemNotificationDto;
import org.example.apexams.notifications.service.NotificationService;
import org.example.apexams.users.entity.UserEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/notifications")
@RequiredArgsConstructor
@PreAuthorize("hasRole('STUDENT')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Student Notifications", description = "User notifications management")
public class StudentNotificationsController {
    private final NotificationService notificationService;

    @Operation(summary = "Get user notifications")
    @GetMapping
    public ResponseEntity<List<NotificationResponse>> getNotifications(
            @Parameter(hidden = true) @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(notificationService.getUserNotifications(userDetails.user().getId()));
    }

    @Operation(summary = "Mark notification as read")
    @PostMapping("/{notificationId}/read")
    public ResponseEntity<NotificationResponse> markAsRead(
            @Parameter(hidden = true) @AuthenticationPrincipal UserDetailsImpl userDetails,
            @Parameter(description = "Notification ID") @PathVariable UUID notificationId) {
        return ResponseEntity.ok(notificationService.markAsRead(userDetails.user().getId(), notificationId));
    }
    @Operation(summary = "Get system notifications")
    @GetMapping("/system")
    public ResponseEntity<List<SystemNotificationDto>> getSystemNotifications(
            @AuthenticationPrincipal UserDetailsImpl userDetails
    ) {
        List<SystemNotificationDto> notifications =
                notificationService.getSystemNotifications(userDetails.user().getId());
        return ResponseEntity.ok(notifications);
    }
}
