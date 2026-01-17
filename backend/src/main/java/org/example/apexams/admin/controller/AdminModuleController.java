package org.example.apexams.admin.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.apexams.module.dto.CreateModuleRequest;
import org.example.apexams.module.dto.ModuleContentRequest;
import org.example.apexams.module.dto.ModuleContentResponse;
import org.example.apexams.module.dto.ModuleResponse;
import org.example.apexams.module.service.ModuleContentService;
import org.example.apexams.module.service.ModuleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/admin/modules")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Admin - Modules", description = "Module and content management for administrators")
public class AdminModuleController {
    private final ModuleService moduleService;
    private final ModuleContentService moduleContentService;

    @Operation(summary = "Get modules by course")
    @GetMapping("/course/{courseId}")
    public ResponseEntity<List<ModuleResponse>> getModulesByCourse(
            @Parameter(description = "Course ID") @PathVariable UUID courseId) {
        return ResponseEntity.ok(moduleService.getModulesByCourse(courseId));
    }

    @Operation(summary = "Get module by ID")
    @GetMapping("/{id}")
    public ResponseEntity<ModuleResponse> getModule(
            @Parameter(description = "Module ID") @PathVariable UUID id) {
        return ResponseEntity.ok(moduleService.getModule(id));
    }

    @Operation(summary = "Create new module")
    @PostMapping
    public ResponseEntity<ModuleResponse> createModule(
            @Parameter(description = "Module data") @Valid @RequestBody CreateModuleRequest request) {
        var module = moduleService.createModule(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(moduleService.getModule(module.getId()));
    }

    @Operation(summary = "Update module")
    @PutMapping("/{id}")
    public ResponseEntity<ModuleResponse> updateModule(
            @Parameter(description = "Module ID") @PathVariable UUID id,
            @Parameter(description = "Updated module data") @Valid @RequestBody CreateModuleRequest request) {
        moduleService.updateModule(id, request);
        return ResponseEntity.ok(moduleService.getModule(id));
    }

    @Operation(summary = "Delete module")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteModule(
            @Parameter(description = "Module ID") @PathVariable UUID id) {
        moduleService.deleteModule(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Create or update module content", description = "Upsert video and text content for a module")
    @PutMapping("/{moduleId}/content")
    public ResponseEntity<ModuleContentResponse> upsertContent(
            @Parameter(description = "Module ID") @PathVariable UUID moduleId,
            @Parameter(description = "Content data") @Valid @RequestBody ModuleContentRequest request) {
        return ResponseEntity.ok(moduleContentService.upsert(request));
    }

    @Operation(summary = "Get module content")
    @GetMapping("/{moduleId}/content")
    public ResponseEntity<ModuleContentResponse> getContent(
            @Parameter(description = "Module ID") @PathVariable UUID moduleId) {
        return ResponseEntity.ok(moduleContentService.getByModuleId(moduleId));
    }

    @Operation(summary = "Delete module content")
    @DeleteMapping("/{moduleId}/content")
    public ResponseEntity<Void> deleteContent(
            @Parameter(description = "Module ID") @PathVariable UUID moduleId) {
        moduleContentService.delete(moduleId);
        return ResponseEntity.noContent().build();
    }
}
