package org.example.apexams.module.controller;

import lombok.RequiredArgsConstructor;
import org.example.apexams.config.security.details.UserDetailsImpl;
import org.example.apexams.module.dto.ModuleDetailsResponse;
import org.example.apexams.module.service.ModuleService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/courses/{courseId}/modules")
@PreAuthorize("hasRole('STUDENT')")
@RequiredArgsConstructor
public class StudentModuleController {
    private final ModuleService moduleService;

    @GetMapping("/{moduleId}")
    public ResponseEntity<ModuleDetailsResponse> getModule(@PathVariable UUID moduleId,
                                                           @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(moduleService.getModuleDetails(moduleId, userDetails.user().getId()));
    }
}
