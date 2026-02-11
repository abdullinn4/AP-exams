package org.example.apexams.dashboard.dto;

import java.util.List;
import java.util.UUID;

public record DashboardCourseDetailResponse(
        UUID courseId,
        String courseTitle,
        String courseSlug,
        String snippet,
        List<CourseLessonPreview> lessons
) {
}
