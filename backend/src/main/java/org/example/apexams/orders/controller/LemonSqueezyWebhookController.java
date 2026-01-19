package org.example.apexams.orders.controller;

import io.swagger.v3.oas.annotations.Hidden;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.orders.service.LemonSqueezyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/webhooks/lemonsqueezy")
@RequiredArgsConstructor
@Slf4j
@Hidden
public class LemonSqueezyWebhookController {

    private final LemonSqueezyService lemonSqueezyService;

    @PostMapping
    public ResponseEntity<Void> handleWebhook(
            @RequestBody String payload,
            @RequestHeader(value = "X-Signature", required = false) String signature) {

        lemonSqueezyService.handleWebhook(payload, signature);
        return ResponseEntity.ok().build();
    }
}
