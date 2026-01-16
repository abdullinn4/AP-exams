package org.example.apexams.tests.controller;

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
public class StudentTestController {
    private final TestAttemptService testAttemptService;

    @PostMapping("/tests/{testId}/attempts")
    public ResponseEntity<StartTestResponse> startAttempt(@PathVariable UUID testId,
                                                          @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(testAttemptService.startTest(testId, userDetails.user().getId()));
    }

    @PostMapping("/test-attempts/{attemptId}/submit")
    public ResponseEntity<TestAttemptResponse> submitAttempt(@PathVariable UUID attemptId,
                                                             @RequestBody Map<UUID, String> answers) {
        return ResponseEntity.ok(testAttemptService.submitAttempt(attemptId, answers));
    }
}
