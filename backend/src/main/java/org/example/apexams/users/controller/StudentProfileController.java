package org.example.apexams.users.controller;

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
public class StudentProfileController {
    private final UserService userService;
    private final StudentCourseService studentCourseService;

    @GetMapping
    public ResponseEntity<UserResponse> getProfile(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(userService.getUserById(userDetails.user().getId()));
    }

    @GetMapping("/courses")
    public ResponseEntity<List<CourseWithProgressResponse>> getMyCourses(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(studentCourseService.getCoursesWithProgress(userDetails.user().getId()));
    }
}
