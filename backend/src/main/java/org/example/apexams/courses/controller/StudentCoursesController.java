package org.example.apexams.courses.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.apexams.config.security.details.UserDetailsImpl;
import org.example.apexams.courses.dto.CourseDetailsResponse;
import org.example.apexams.users.service.StudentCourseService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/courses")
@PreAuthorize("hasRole('STUDENT')")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Student Courses", description = "Student course access and details (requires authentication)")
public class StudentCoursesController {
    private final StudentCourseService studentCourseService;

    @Operation(
            summary = "Get course details with modules and progress",
            description = "Returns course details including modules list and user progress. Requires enrollment."
    )
    @GetMapping("/{courseId}")
    public ResponseEntity<CourseDetailsResponse> getCourse(
            @Parameter(hidden = true) @AuthenticationPrincipal UserDetailsImpl userDetails,
            @Parameter(description = "Course ID") @PathVariable UUID courseId) {
        return ResponseEntity.ok(studentCourseService.getCourseWithModules(userDetails.user().getId(), courseId));
    }
}
