package org.example.apexams.stats.dto;

import java.util.List;

public record UserStatisticsResponse(
        List<CourseStatisticsResponse> courses
) {
}
