package org.example.apexams.orders.controller;

import io.swagger.v3.oas.annotations.Hidden;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.orders.service.PayProService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
            @RequestHeader(value = "SIGNATURE", required = false) String signature
    ) {
        try {
            log.info("Received PayPro webhook, payload length: {}", payload.length());

            // Обрабатываем webhook
            payProService.handleWebhook(payload, signature);

            // PayPro ожидает HTTP 200 для успешной обработки
            return ResponseEntity.ok("OK");

        } catch (SecurityException e) {
            // Неверная подпись
            log.error("Webhook signature verification failed: {}", e.getMessage());
            return ResponseEntity.status(403).body("FORBIDDEN");

        } catch (Exception e) {
            // Любая другая ошибка
            log.error("Webhook processing failed: {}", e.getMessage(), e);
            return ResponseEntity.status(500).body("ERROR");
        }
    }
}
