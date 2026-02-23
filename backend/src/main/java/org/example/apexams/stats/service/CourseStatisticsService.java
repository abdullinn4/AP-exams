package org.example.apexams.stats.service;

import org.example.apexams.stats.dto.UserStatisticsResponse;

import java.util.UUID;

public interface CourseStatisticsService {
    UserStatisticsResponse getUserCoursesStatistics(UUID userId);
}
