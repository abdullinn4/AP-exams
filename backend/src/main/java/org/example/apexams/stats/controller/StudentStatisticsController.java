package org.example.apexams.stats.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.apexams.config.security.details.UserDetailsImpl;
import org.example.apexams.stats.dto.UserStatisticsResponse;
import org.example.apexams.stats.service.CourseStatisticsService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/statistics")
@RequiredArgsConstructor
@PreAuthorize("hasRole('STUDENT')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Student Statistics", description = "Course statistics and potential grades for students")
public class StudentStatisticsController {

    private final CourseStatisticsService courseStatisticsService;

    @Operation(
            summary = "Get user statistics",
            description = "Returns statistics for all enrolled courses including unit progress, mock exam results, and potential grades"
    )
    @GetMapping
    public ResponseEntity<UserStatisticsResponse> getUserStatistics(
            @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(
                courseStatisticsService.getUserCoursesStatistics(userDetails.user().getId())
        );
    }
}