package org.example.apexams.users.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.apexams.config.security.details.UserDetailsImpl;
import org.example.apexams.courses.dto.CourseWithProgressResponse;
import org.example.apexams.users.dto.UserResponse;
import org.example.apexams.users.service.StudentCourseService;
import org.example.apexams.users.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/me")
@RequiredArgsConstructor
@PreAuthorize("hasRole('STUDENT')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Student Profile", description = "Student profile and enrolled courses")
public class StudentProfileController {
    private final UserService userService;
    private final StudentCourseService studentCourseService;

    @Operation(summary = "Get current user profile")
    @GetMapping
    public ResponseEntity<UserResponse> getProfile(
            @Parameter(hidden = true) @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(userService.getUserById(userDetails.user().getId()));
    }

    @Operation(summary = "Get enrolled courses with progress")
    @GetMapping("/courses")
    public ResponseEntity<List<CourseWithProgressResponse>> getMyCourses(
            @Parameter(hidden = true) @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(studentCourseService.getCoursesWithProgress(userDetails.user().getId()));
    }
}
