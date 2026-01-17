package org.example.apexams.admin.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.apexams.courses.dto.CourseResponse;
import org.example.apexams.courses.dto.CreateCourseRequest;
import org.example.apexams.courses.service.CourseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/admin/courses")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Admin - Courses", description = "Course management for administrators")
public class AdminCourseController {
    private final CourseService courseService;

    @Operation(summary = "Get all courses", description = "Returns all courses including drafts")
    @GetMapping
    public ResponseEntity<List<CourseResponse>> getAllCourses() {
        return ResponseEntity.ok(courseService.getAllCourses());
    }

    @Operation(summary = "Get course by ID")
    @GetMapping("/{id}")
    public ResponseEntity<CourseResponse> getCourse(
            @Parameter(description = "Course ID") @PathVariable UUID id) {
        return ResponseEntity.ok(courseService.getCourse(id));
    }

    @Operation(summary = "Create new course", description = "Create a new course with title, slug, description, etc.")
    @PostMapping
    public ResponseEntity<CourseResponse> createCourse(
            @Parameter(description = "Course data") @Valid @RequestBody CreateCourseRequest request) {
        var course = courseService.createCourse(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(courseService.getCourse(course.getId()));
    }

    @Operation(summary = "Update course")
    @PutMapping("/{id}")
    public ResponseEntity<CourseResponse> updateCourse(
            @Parameter(description = "Course ID") @PathVariable UUID id,
            @Parameter(description = "Updated course data") @Valid @RequestBody CreateCourseRequest request) {
        courseService.updateCourse(id, request);
        return ResponseEntity.ok(courseService.getCourse(id));
    }

    @Operation(summary = "Publish course", description = "Make course visible to students")
    @PostMapping("/{id}/publish")
    public ResponseEntity<Void> publishCourse(
            @Parameter(description = "Course ID") @PathVariable UUID id) {
        courseService.publishCourse(id);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Unpublish course", description = "Hide course from students")
    @PostMapping("/{id}/unpublish")
    public ResponseEntity<Void> unpublishCourse(
            @Parameter(description = "Course ID") @PathVariable UUID id) {
        courseService.unpublishCourse(id);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Delete course")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(
            @Parameter(description = "Course ID") @PathVariable UUID id) {
        courseService.deleteCourse(id);
        return ResponseEntity.noContent().build();
    }
}