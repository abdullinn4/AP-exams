package org.example.apexams.units.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.apexams.units.dto.UnitResponse;
import org.example.apexams.units.dto.UnitWithLessonsResponse;
import org.example.apexams.units.service.UnitService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/units")
@RequiredArgsConstructor
@Tag(name = "Units", description = "Unit management and access")
@SecurityRequirement(name = "bearerAuth")
public class UnitController {
    private final UnitService unitService;

    @Operation(summary = "Get unit details", description = "Returns unit information without lessons")
    @GetMapping("/{unitId}")
    public ResponseEntity<UnitResponse> getUnit(
            @Parameter(description = "Unit ID") @PathVariable UUID unitId) {
        return ResponseEntity.ok(unitService.getUnit(unitId));
    }

    @Operation(summary = "Get unit with lessons", description = "Returns unit details with all lessons and their progress for the authenticated user")
    @GetMapping("/{unitId}/with-lessons")
    public ResponseEntity<UnitWithLessonsResponse> getUnitWithLessons(
            @Parameter(description = "Unit ID") @PathVariable UUID unitId,
            @AuthenticationPrincipal UserDetails userDetails) {
        UUID userId = UUID.fromString(userDetails.getUsername());
        return ResponseEntity.ok(unitService.getUnitWithLessons(unitId, userId));
    }
}
