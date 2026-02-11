package org.example.apexams.dashboard.dto;

import java.util.List;

public record DashboardResponse(
        List<CourseCardResponse> myCourses,
        List<CourseCardResponse> availableCourses,
        List<DashboardCourseDetailResponse> selectedCourseDetail
) {
}
