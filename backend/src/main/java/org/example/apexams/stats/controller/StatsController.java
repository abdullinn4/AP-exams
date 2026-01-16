package org.example.apexams.stats.controller;

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
public class StatsController {
    private final StatsService statsService;

    @GetMapping
    public ResponseEntity<StatsResponse> getStats(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(statsService.getStats(userDetails.user().getId()));
    }
}
