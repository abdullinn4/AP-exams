package org.example.apexams.admin.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.apexams.tariffs.dto.CreateTariffRequest;
import org.example.apexams.tariffs.dto.TariffResponse;
import org.example.apexams.tariffs.service.TariffService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/admin/tariffs")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Admin - Tariffs", description = "Tariff management for administrators")
public class AdminTariffController {
    private final TariffService tariffService;

    @Operation(summary = "Get all tariffs")
    @GetMapping
    public ResponseEntity<List<TariffResponse>> getAllTariffs() {
        return ResponseEntity.ok(tariffService.getAllTariffs());
    }

    @Operation(summary = "Get tariffs by course")
    @GetMapping("/course/{courseId}")
    public ResponseEntity<List<TariffResponse>> getTariffsByCourse(
            @Parameter(description = "Course ID") @PathVariable UUID courseId) {
        return ResponseEntity.ok(tariffService.getByCourseId(courseId));
    }

    @Operation(summary = "Get tariff by ID")
    @GetMapping("/{id}")
    public ResponseEntity<TariffResponse> getTariff(
            @Parameter(description = "Tariff ID") @PathVariable UUID id) {
        return ResponseEntity.ok(tariffService.getTariff(id));
    }

    @Operation(summary = "Create new tariff", description = "Create Basic or Pro tariff for a course")
    @PostMapping
    public ResponseEntity<TariffResponse> createTariff(
            @Parameter(description = "Tariff data") @Valid @RequestBody CreateTariffRequest request) {
        var tariff = tariffService.createTariff(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(tariffService.getTariff(tariff.getId()));
    }

    @Operation(summary = "Update tariff")
    @PutMapping("/{id}")
    public ResponseEntity<TariffResponse> updateTariff(
            @Parameter(description = "Tariff ID") @PathVariable UUID id,
            @Parameter(description = "Updated tariff data") @Valid @RequestBody CreateTariffRequest request) {
        tariffService.updateTariff(id, request);
        return ResponseEntity.ok(tariffService.getTariff(id));
    }

    @Operation(summary = "Activate tariff", description = "Make tariff available for purchase")
    @PostMapping("/{id}/activate")
    public ResponseEntity<Void> activateTariff(
            @Parameter(description = "Tariff ID") @PathVariable UUID id) {
        tariffService.activateTariff(id);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Deactivate tariff", description = "Hide tariff from purchase options")
    @PostMapping("/{id}/deactivate")
    public ResponseEntity<Void> deactivateTariff(
            @Parameter(description = "Tariff ID") @PathVariable UUID id) {
        tariffService.deactivateTariff(id);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Delete tariff")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTariff(
            @Parameter(description = "Tariff ID") @PathVariable UUID id) {
        tariffService.deleteTariff(id);
        return ResponseEntity.noContent().build();
    }
}
