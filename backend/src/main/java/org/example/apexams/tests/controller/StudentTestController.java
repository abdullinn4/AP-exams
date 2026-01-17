package org.example.apexams.tests.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.apexams.config.security.details.UserDetailsImpl;
import org.example.apexams.tests.dto.StartTestResponse;
import org.example.apexams.tests.dto.TestAttemptResponse;
import org.example.apexams.tests.service.TestAttemptService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@PreAuthorize("hasRole('STUDENT')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Student Tests", description = "Test attempts and submissions for students")
public class StudentTestController {
    private final TestAttemptService testAttemptService;

    @Operation(
            summary = "Start test attempt",
            description = "Start a new test attempt. Returns test questions and attempt ID."
    )
    @PostMapping("/tests/{testId}/attempts")
    public ResponseEntity<StartTestResponse> startAttempt(
            @Parameter(description = "Test ID") @PathVariable UUID testId,
            @Parameter(hidden = true) @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(testAttemptService.startTest(testId, userDetails.user().getId()));
    }

    @Operation(
            summary = "Submit test answers",
            description = "Submit answers for a test attempt. Returns score and results."
    )
    @PostMapping("/test-attempts/{attemptId}/submit")
    public ResponseEntity<TestAttemptResponse> submitAttempt(
            @Parameter(description = "Attempt ID") @PathVariable UUID attemptId,
            @Parameter(description = "Map of question ID to answer") @RequestBody Map<UUID, String> answers) {
        return ResponseEntity.ok(testAttemptService.submitAttempt(attemptId, answers));
    }
}
