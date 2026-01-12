package org.example.apexams.orders.controller;

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
public class CheckoutController {
    private final CheckoutService checkoutService;

    @PostMapping("/prepare")
    public ResponseEntity<CheckoutResponse> prepareCheckout(
            @Valid @RequestBody CheckoutPrepareRequest request) {
        return ResponseEntity.ok(checkoutService.prepareCheckout(request));
    }
}
