package org.example.apexams.orders.controller;

import io.swagger.v3.oas.annotations.Hidden;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.orders.service.PayProService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/webhooks/paypro")
@RequiredArgsConstructor
@Slf4j
@Hidden  // Скрываем из Swagger документации
public class PayProWebhookController {

    private final PayProService payProService;

    /**
     * Обработка webhook от PayPro Global (IPN)
     * PayPro отправляет данные в формате application/x-www-form-urlencoded
     * Подпись приходит в заголовке SIGNATURE
     */
    @PostMapping
    public ResponseEntity<String> handleWebhook(
            @RequestBody String payload,
            @RequestHeader(value = "SIGNATURE", required = false) String signature,
            @RequestHeader Map<String, String> headers  // ← Добавляем все headers
    ) {
        try {
            log.info("Webhook payload: {}", payload);
            log.info("Received PayPro webhook, payload length: {}", payload.length());
            log.info("All webhook headers: {}", headers);  // ← Логируем все headers

            // Обрабатываем webhook
            payProService.handleWebhook(payload, signature);

            return ResponseEntity.ok("OK");

        } catch (SecurityException e) {
            log.error("Webhook signature verification failed: {}", e.getMessage());
            return ResponseEntity.status(403).body("FORBIDDEN");

        } catch (Exception e) {
            log.error("Webhook processing failed: {}", e.getMessage(), e);
            return ResponseEntity.status(500).body("ERROR");
        }
    }
}
