package org.example.apexams.lessons.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.apexams.config.security.details.UserDetailsImpl;
import org.example.apexams.lessons.dto.LessonDetailsResponse;
import org.example.apexams.lessons.service.LessonService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/courses/{courseSlug}/units/{unitId}/lessons")
@PreAuthorize("hasRole('STUDENT')")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Student Lessons", description = "Lesson content access for students")
public class StudentLessonController {
    private final LessonService lessonService;

    @Operation(summary = "Get lesson details", description = "Get lesson content including video, text, test info, and Discord access for Pro users")
    @GetMapping("/{lessonId}")
    public ResponseEntity<LessonDetailsResponse> getLesson(
            @Parameter(description = "Lesson ID") @PathVariable UUID lessonId,
            @Parameter(hidden = true) @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(lessonService.getLessonDetails(lessonId, userDetails.user().getId()));
    }
}
