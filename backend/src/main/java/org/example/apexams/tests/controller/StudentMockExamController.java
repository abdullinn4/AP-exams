package org.example.apexams.tests.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.apexams.config.security.details.UserDetailsImpl;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.courses.repo.CourseRepository;
import org.example.apexams.enrollments.service.EnrollmentService;
import org.example.apexams.tests.dto.MockExamDetailsResponse;
import org.example.apexams.tests.dto.MockExamsResponse;
import org.example.apexams.tests.service.MockExamService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1")
@PreAuthorize("hasRole('STUDENT')")
@RequiredArgsConstructor
@Tag(name = "Mock Exams", description = "Mock exam management and access")
@SecurityRequirement(name = "bearerAuth")
public class StudentMockExamController {
    private final MockExamService mockExamService;
    private final CourseRepository courseRepository;
    private final EnrollmentService enrollmentService;

    @Operation(summary = "Get all mock exams for a course",
            description = "Returns all mock exams with user progress")
    @GetMapping("/courses/{courseSlug}/mock-exams")
    public ResponseEntity<MockExamsResponse> getMockExams(
            @Parameter(description = "Course slug") @PathVariable String courseSlug,
            @AuthenticationPrincipal UserDetailsImpl userDetails) {

        CourseEntity course = courseRepository.findBySlug(courseSlug)
                .orElseThrow(() -> new IllegalArgumentException("Course not found: " + courseSlug));

        if (!enrollmentService.hasAccess(userDetails.user().getId(), course.getId())) {
            throw new IllegalStateException("User does not have access to this course");
        }

        return ResponseEntity.ok(mockExamService.getMockExamsByCourse(course.getId(), userDetails.user().getId()));
    }

    @Operation(summary = "Get mock exam details",
            description = "Returns mock exam details with user progress and attempt status")
    @GetMapping("/mock-exams/{examId}")
    public ResponseEntity<MockExamDetailsResponse> getMockExamDetails(
            @Parameter(description = "Mock exam ID") @PathVariable UUID examId,
            @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(mockExamService.getMockExamDetails(examId, userDetails.user().getId()));
    }
}
