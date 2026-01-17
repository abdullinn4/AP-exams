package org.example.apexams.stats.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.apexams.config.security.details.UserDetailsImpl;
import org.example.apexams.stats.dto.StatsResponse;
import org.example.apexams.stats.service.StatsService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/stats")
@RequiredArgsConstructor
@PreAuthorize("hasRole('STUDENT')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Student Statistics", description = "Student performance statistics and analytics")
public class StatsController {
    private final StatsService statsService;

    @Operation(summary = "Get user statistics", description = "Get comprehensive statistics including test scores, progress, and achievements")
    @GetMapping
    public ResponseEntity<StatsResponse> getStats(
            @Parameter(hidden = true) @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(statsService.getStats(userDetails.user().getId()));
    }
}
