package org.example.apexams.dashboard.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.apexams.config.security.details.UserDetailsImpl;
import org.example.apexams.dashboard.dto.DashboardResponse;
import org.example.apexams.dashboard.service.DashboardService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/dashboard")
@RequiredArgsConstructor
@PreAuthorize("hasRole('STUDENT')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Student Dashboard", description = "Student dashboard with overview and recent activity")
public class DashboardController {
    private final DashboardService dashboardService;

    @Operation(summary = "Get dashboard data", description = "Get dashboard overview including courses, progress, and recent notifications")
    @GetMapping
    public ResponseEntity<DashboardResponse> getDashboard(
            @Parameter(hidden = true) @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(dashboardService.getDashboard(userDetails.user().getId()));
    }
}
