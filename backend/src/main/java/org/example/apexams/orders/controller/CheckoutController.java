package org.example.apexams.orders.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.apexams.orders.dto.CheckoutResponse;
import org.example.apexams.orders.service.CheckoutService;
import org.example.apexams.users.dto.CheckoutPrepareRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/checkout")
@RequiredArgsConstructor
@Tag(name = "Checkout", description = "Course purchase and LemonSqueezy checkout")
public class CheckoutController {
    private final CheckoutService checkoutService;

    @Operation(
            summary = "Prepare checkout session",
            description = "Create PayPro checkout session for course purchase. Creates user if not exists."
    )
    @PostMapping("/prepare")
    public ResponseEntity<CheckoutResponse> prepareCheckout(
            @Parameter(description = "User and tariff information") @Valid @RequestBody CheckoutPrepareRequest request,
            HttpServletRequest httpRequest) {
        return ResponseEntity.ok(checkoutService.prepareCheckout(request, httpRequest));
    }
}
