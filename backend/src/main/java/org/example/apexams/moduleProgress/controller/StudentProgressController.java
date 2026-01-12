package org.example.apexams.moduleProgress.controller;

import lombok.RequiredArgsConstructor;
import org.example.apexams.config.security.details.UserDetailsImpl;
import org.example.apexams.moduleProgress.service.ModuleProgressService;
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
public class StudentProgressController {
    private final ModuleProgressService moduleProgressService;

    @PostMapping("/modules/{moduleId}/complete")
    public ResponseEntity<Void> completeModule(@PathVariable UUID moduleId, @AuthenticationPrincipal UserDetailsImpl userDetails) {
        moduleProgressService.completeModule(moduleId, userDetails.user().getId());
        return ResponseEntity.ok().build();
    }
}
