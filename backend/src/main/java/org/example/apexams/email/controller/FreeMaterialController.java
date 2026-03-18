package org.example.apexams.email.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.email.dto.FreeMaterialRequest;
import org.example.apexams.email.service.EmailService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/v1/free-materials")
@RequiredArgsConstructor
public class FreeMaterialController {

    private final EmailService emailService;

    @PostMapping("/request")
    public ResponseEntity<Void> requestFreeMaterial(
            @Valid @RequestBody FreeMaterialRequest request
    ) {
        log.info("Free material request: {} for material: {}",
                request.getEmail(), request.getMaterialSlug());

        try {
            emailService.sendFreeMaterial(request.getEmail(), request.getMaterialSlug());
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            log.error("Failed to process free material request", e);
            return ResponseEntity.internalServerError().build();
        }
    }
}
