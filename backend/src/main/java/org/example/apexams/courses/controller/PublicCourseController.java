package org.example.apexams.courses.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.apexams.courses.dto.CourseResponse;
import org.example.apexams.courses.dto.CourseWithUnitsResponse;
import org.example.apexams.courses.service.CourseService;
import org.example.apexams.tariffs.dto.TariffResponse;
import org.example.apexams.tariffs.service.TariffService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/public/courses")
@RequiredArgsConstructor
@Tag(name = "Public Courses", description = "Public course catalog and preview (no authentication required)")
public class PublicCourseController {
    private final CourseService courseService;
    private final TariffService tariffService;

    @Operation(summary = "Get all published courses", description = "Returns list of all published courses available for purchase")
    @GetMapping
    public ResponseEntity<List<CourseResponse>> getPublishedCourses() {
        return ResponseEntity.ok(courseService.getPublishedCourses());
    }

    @Operation(summary = "Get course preview by slug", description = "Returns course details including preview video and description")
    @GetMapping("/{slug}/preview")
    public ResponseEntity<CourseWithUnitsResponse> getCourseBySlug(
            @Parameter(description = "Course slug") @PathVariable String slug) {
        return ResponseEntity.ok(courseService.getCourseBySlug(slug));
    }


    @Operation(summary = "Get course tariffs", description = "Returns available tariffs (Basic/Pro) for a course")
    @GetMapping("/{courseId}/tariffs")
    public ResponseEntity<List<TariffResponse>> getActiveTariffs(
            @Parameter(description = "Course ID") @PathVariable UUID courseId) {
        return ResponseEntity.ok(tariffService.getActiveTariffsByCourse(courseId));
    }
}
