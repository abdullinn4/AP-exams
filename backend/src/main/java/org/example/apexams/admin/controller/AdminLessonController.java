package org.example.apexams.admin.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.apexams.lessons.dto.CreateLessonRequest;
import org.example.apexams.lessons.dto.LessonContentRequest;
import org.example.apexams.lessons.dto.LessonContentResponse;
import org.example.apexams.lessons.dto.LessonResponse;
import org.example.apexams.lessons.service.LessonContentService;
import org.example.apexams.lessons.service.LessonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/admin/lessons")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Admin - Lessons", description = "Lesson and content management for administrators")
public class AdminLessonController {
    private final LessonService lessonService;
    private final LessonContentService lessonContentService;

    @Operation(summary = "Get lessons by unit")
    @GetMapping("/unit/{unitId}")
    public ResponseEntity<List<LessonResponse>> getLessonsByUnit(
            @Parameter(description = "Unit ID") @PathVariable UUID unitId) {
        return ResponseEntity.ok(lessonService.getLessonsByUnit(unitId));
    }

    @Operation(summary = "Get lesson by ID")
    @GetMapping("/{id}")
    public ResponseEntity<LessonResponse> getLesson(
            @Parameter(description = "Lesson ID") @PathVariable UUID id) {
        return ResponseEntity.ok(lessonService.getLesson(id));
    }

    @Operation(summary = "Create new lesson")
    @PostMapping
    public ResponseEntity<LessonResponse> createLesson(
            @Parameter(description = "Lesson data") @Valid @RequestBody CreateLessonRequest request) {
        var lesson = lessonService.createLesson(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(lessonService.getLesson(lesson.getId()));
    }

    @Operation(summary = "Update lesson")
    @PutMapping("/{id}")
    public ResponseEntity<LessonResponse> updateLesson(
            @Parameter(description = "Lesson ID") @PathVariable UUID id,
            @Parameter(description = "Updated lesson data") @Valid @RequestBody CreateLessonRequest request) {
        lessonService.updateLesson(id, request);
        return ResponseEntity.ok(lessonService.getLesson(id));
    }

    @Operation(summary = "Delete lesson")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLesson(
            @Parameter(description = "Lesson ID") @PathVariable UUID id) {
        lessonService.deleteLesson(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Create or update lesson content", description = "Upsert video and text content for a lesson")
    @PutMapping("/{lessonId}/content")
    public ResponseEntity<LessonContentResponse> upsertContent(
            @Parameter(description = "Lesson ID") @PathVariable UUID lessonId,
            @Parameter(description = "Content data") @Valid @RequestBody LessonContentRequest request) {
        return ResponseEntity.ok(lessonContentService.upsert(request));
    }

    @Operation(summary = "Get lesson content")
    @GetMapping("/{lessonId}/content")
    public ResponseEntity<LessonContentResponse> getContent(
            @Parameter(description = "Lesson ID") @PathVariable UUID lessonId) {
        return ResponseEntity.ok(lessonContentService.getByLessonId(lessonId));
    }

    @Operation(summary = "Delete lesson content")
    @DeleteMapping("/{lessonId}/content")
    public ResponseEntity<Void> deleteContent(
            @Parameter(description = "Lesson ID") @PathVariable UUID lessonId) {
        lessonContentService.delete(lessonId);
        return ResponseEntity.noContent().build();
    }
}
