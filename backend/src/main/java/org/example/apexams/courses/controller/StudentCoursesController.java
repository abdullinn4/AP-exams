package org.example.apexams.courses.controller;

import lombok.RequiredArgsConstructor;
import org.example.apexams.config.security.details.UserDetailsImpl;
import org.example.apexams.courses.dto.CourseDetailsResponse;
import org.example.apexams.courses.dto.CourseResponse;
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
public class StudentCoursesController {
    private final StudentCourseService studentCourseService;

    @GetMapping("/{courseId}")
    public ResponseEntity<CourseDetailsResponse> getCourse(@AuthenticationPrincipal UserDetailsImpl userDetails, @PathVariable UUID courseId) {
        return ResponseEntity.ok(studentCourseService.getCourseWithModules(userDetails.user().getId(), courseId));
    }
}
