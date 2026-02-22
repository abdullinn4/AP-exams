package org.example.apexams.notifications.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SystemNotificationDto {
    private String type;
    private String title;
    private String message;
    private String actionUrl;
}
