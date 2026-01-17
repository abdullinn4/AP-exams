package org.example.apexams.admin.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.apexams.questionBank.dto.QuestionResponse;
import org.example.apexams.questionBank.entity.enums.QuestionType;
import org.example.apexams.questionBank.service.QuestionService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/admin/questions")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Admin - Question Bank", description = "Question bank management for administrators")
public class AdminQuestionBankController {
    private final QuestionService questionService;

    @Operation(summary = "Get questions by course")
    @GetMapping("/course/{courseId}")
    public ResponseEntity<List<QuestionResponse>> getQuestionsByCourse(
            @Parameter(description = "Course ID") @PathVariable UUID courseId) {
        return ResponseEntity.ok(questionService.getQuestionsByCourse(courseId));
    }

    @Operation(summary = "Get questions by type", description = "Filter questions by type (PRACTICE, MOCK_EXAM, etc.)")
    @GetMapping("/course/{courseId}/type/{type}")
    public ResponseEntity<List<QuestionResponse>> getQuestionsByType(
            @Parameter(description = "Course ID") @PathVariable UUID courseId,
            @Parameter(description = "Question type") @PathVariable QuestionType type) {
        return ResponseEntity.ok(questionService.getQuestionsByType(courseId, type));
    }

    @Operation(summary = "Get question by ID")
    @GetMapping("/{id}")
    public ResponseEntity<QuestionResponse> getQuestion(
            @Parameter(description = "Question ID") @PathVariable UUID id) {
        return ResponseEntity.ok(questionService.getQuestion(id));
    }
}
