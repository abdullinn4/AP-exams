package org.example.apexams.module.controller;

import lombok.RequiredArgsConstructor;
import org.example.apexams.config.security.details.UserDetailsImpl;
import org.example.apexams.module.dto.ModuleResponse;
import org.example.apexams.module.service.ModuleService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/{courseId}/modules")
@PreAuthorize("hasRole('STUDENT')")
@RequiredArgsConstructor
public class StudentModuleController {
    private final ModuleService moduleService;

    @GetMapping
    public ResponseEntity<List<ModuleResponse>> getCourseModules(@PathVariable UUID courseId, @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(moduleService.getModulesWithProgress(courseId, userDetails.user().getId()));
    }

    @GetMapping("/{moduleId}")
    public ResponseEntity<ModuleResponse> getModule(@PathVariable UUID moduleId,
                                                    @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(moduleService.getModuleWithAccess(moduleId, userDetails.user().getId()));
    }
}
