package org.example.apexams.dashboard.dto;

import org.example.apexams.courses.dto.CourseWithProgressResponse;
import org.example.apexams.notifications.dto.NotificationResponse;

import java.util.List;

public record DashboardResponse(
        ContinueLearningItem continueLearningItem,
        List<CourseWithProgressResponse> recentCourses,
        List<NotificationResponse> recentNotifications,
        StatsPreview statsPreview
) {
}
