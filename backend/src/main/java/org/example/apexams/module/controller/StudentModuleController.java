package org.example.apexams.module.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
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
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Student Modules", description = "Module content access for students")
public class StudentModuleController {
    private final ModuleService moduleService;

    @Operation(summary = "Get module details", description = "Get module content including video, text, test info, and Discord access for Pro users")
    @GetMapping("/{moduleId}")
    public ResponseEntity<ModuleDetailsResponse> getModule(
            @Parameter(description = "Module ID") @PathVariable UUID moduleId,
            @Parameter(hidden = true) @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(moduleService.getModuleDetails(moduleId, userDetails.user().getId()));
    }
}
