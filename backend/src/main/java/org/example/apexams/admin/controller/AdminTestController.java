package org.example.apexams.admin.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.apexams.questionBank.dto.QuestionForStudentResponse;
import org.example.apexams.tests.dto.TestAttemptResponse;
import org.example.apexams.tests.dto.TestResponse;
import org.example.apexams.tests.service.TestAttemptService;
import org.example.apexams.tests.service.TestService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/admin/tests")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Admin - Tests", description = "Test and question management for administrators")
public class AdminTestController {
    private final TestService testService;
    private final TestAttemptService testAttemptService;

    @Operation(summary = "Get tests by course")
    @GetMapping("/course/{courseId}")
    public ResponseEntity<List<TestResponse>> getTestsByCourse(
            @Parameter(description = "Course ID") @PathVariable UUID courseId) {
        return ResponseEntity.ok(testService.getTestsByCourse(courseId));
    }

    @Operation(summary = "Get tests by module")
    @GetMapping("/module/{moduleId}")
    public ResponseEntity<List<TestResponse>> getTestsByModule(
            @Parameter(description = "Module ID") @PathVariable UUID moduleId) {
        return ResponseEntity.ok(testService.getTestsByModule(moduleId));
    }

    @Operation(summary = "Get test by ID")
    @GetMapping("/{id}")
    public ResponseEntity<TestResponse> getTest(
            @Parameter(description = "Test ID") @PathVariable UUID id) {
        return ResponseEntity.ok(testService.getTest(id));
    }

    @Operation(summary = "Publish test", description = "Make test available to students")
    @PostMapping("/{testId}/publish")
    public ResponseEntity<Void> publishTest(
            @Parameter(description = "Test ID") @PathVariable UUID testId) {
        testService.publishTest(testId);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Unpublish test", description = "Hide test from students")
    @PostMapping("/{testId}/unpublish")
    public ResponseEntity<Void> unpublishTest(
            @Parameter(description = "Test ID") @PathVariable UUID testId) {
        testService.unpublishTest(testId);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Get test questions")
    @GetMapping("/{testId}/questions")
    public ResponseEntity<List<QuestionForStudentResponse>> getTestQuestions(
            @Parameter(description = "Test ID") @PathVariable UUID testId) {
        return ResponseEntity.ok(testService.getTestQuestions(testId));
    }

    @Operation(summary = "Add question to test")
    @PostMapping("/{testId}/questions/{questionId}")
    public ResponseEntity<Void> addQuestionToTest(
            @Parameter(description = "Test ID") @PathVariable UUID testId,
            @Parameter(description = "Question ID") @PathVariable UUID questionId,
            @Parameter(description = "Order index") @RequestParam int orderIndex) {
        testService.addQuestionToTest(testId, questionId, orderIndex);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Remove question from test")
    @DeleteMapping("/{testId}/questions/{questionId}")
    public ResponseEntity<Void> removeQuestionFromTest(
            @Parameter(description = "Test ID") @PathVariable UUID testId,
            @Parameter(description = "Question ID") @PathVariable UUID questionId) {
        testService.removeQuestionFromTest(testId, questionId);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Get test attempts", description = "Get all attempts for a specific test")
    @GetMapping("/{testId}/attempts")
    public ResponseEntity<List<TestAttemptResponse>> getTestAttempts(
            @Parameter(description = "Test ID") @PathVariable UUID testId) {
        return ResponseEntity.ok(testAttemptService.getUserAttempts(null, testId));
    }

    @Operation(summary = "Get course attempts", description = "Get all test attempts for a course")
    @GetMapping("/course/{courseId}/attempts")
    public ResponseEntity<List<TestAttemptResponse>> getCourseAttempts(
            @Parameter(description = "Course ID") @PathVariable UUID courseId) {
        return ResponseEntity.ok(testAttemptService.getCourseAttempts(courseId));
    }

    @Operation(summary = "Reset user attempts", description = "Reset all attempts for a user on a specific test")
    @DeleteMapping("/attempts/{userId}/{testId}")
    public ResponseEntity<Void> resetUserAttempts(
            @Parameter(description = "User ID") @PathVariable UUID userId,
            @Parameter(description = "Test ID") @PathVariable UUID testId) {
        testAttemptService.resetAttempts(userId, testId);
        return ResponseEntity.noContent().build();
    }
}
