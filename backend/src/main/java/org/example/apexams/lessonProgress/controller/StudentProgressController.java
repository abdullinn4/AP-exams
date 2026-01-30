package org.example.apexams.lessonProgress.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.apexams.config.security.details.UserDetailsImpl;
import org.example.apexams.lessonProgress.service.LessonProgressService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/progress")
@RequiredArgsConstructor
@PreAuthorize("hasRole('STUDENT')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Student Progress", description = "Module progress tracking")
public class StudentProgressController {
    private final LessonProgressService lessonProgressService;

    @Operation(summary = "Mark module as completed", description = "Mark a module as completed and update progress")
    @PostMapping("/lessons/{lessonId}/complete")
    public ResponseEntity<Void> completeModule(
            @Parameter(description = "Module ID") @PathVariable UUID lessonId,
            @Parameter(hidden = true) @AuthenticationPrincipal UserDetailsImpl userDetails) {
        lessonProgressService.completeLesson(lessonId, userDetails.user().getId());
        return ResponseEntity.ok().build();
    }
}
