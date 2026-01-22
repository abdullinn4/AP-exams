package org.example.apexams.promocodes.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.apexams.promocodes.dto.PromoCodeValidationRequest;
import org.example.apexams.promocodes.dto.PromoCodeValidationResponse;
import org.example.apexams.promocodes.service.PromoCodeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/promo-codes")
@RequiredArgsConstructor
@Tag(name = "Promo Codes", description = "Promo code validation and management")
public class PromoCodeController {
    private final PromoCodeService promoCodeService;

    @Operation(
            summary = "Validate promo code",
            description = "Validate promo code and calculate discounted price for a specific tariff"
    )
    @PostMapping("/validate")
    public ResponseEntity<PromoCodeValidationResponse> validatePromoCode(
            @Valid @RequestBody PromoCodeValidationRequest request
    ) {
        PromoCodeValidationResponse response = promoCodeService.validateAndApply(request);
        return ResponseEntity.ok(response);
    }
}