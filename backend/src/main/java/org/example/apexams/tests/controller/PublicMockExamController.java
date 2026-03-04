package org.example.apexams.tests.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.courses.repo.CourseRepository;
import org.example.apexams.tests.dto.MockExamsPreviewResponse;
import org.example.apexams.tests.service.MockExamService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/public")
@RequiredArgsConstructor
@Tag(name = "Public Mock Exams", description = "Public mock exam information")
public class PublicMockExamController {
    private final MockExamService mockExamService;
    private final CourseRepository courseRepository;

    @Operation(summary = "Get mock exams preview for a course",
            description = "Returns basic mock exam information without user progress (public access)")
    @GetMapping("/courses/{courseSlug}/mock-exams")
    public ResponseEntity<MockExamsPreviewResponse> getMockExamsPreview(
            @Parameter(description = "Course slug") @PathVariable String courseSlug) {

        CourseEntity course = courseRepository.findBySlug(courseSlug)
                .orElseThrow(() -> new IllegalArgumentException("Course not found: " + courseSlug));

        // Возвращаем только базовую информацию без прогресса пользователя
        return ResponseEntity.ok(mockExamService.getMockExamsPreview(course.getId()));
    }
}
