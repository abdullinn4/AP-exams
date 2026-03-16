package org.example.apexams.email.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.email.dto.PartnershipSubscriptionRequest;
import org.example.apexams.email.service.EmailService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/v1/partnership")
@RequiredArgsConstructor
public class PartnershipController {

    private final EmailService emailService;

    @PostMapping("/subscribe")
    public ResponseEntity<Void> subscribeToPartnership(
            @Valid @RequestBody PartnershipSubscriptionRequest request
    ) {
        log.info("New partnership subscription request: {}", request.getEmail());

        try {
            emailService.sendPartnershipNotification(request.getEmail());
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            log.error("Failed to process partnership subscription", e);
            return ResponseEntity.internalServerError().build();
        }
    }
}
