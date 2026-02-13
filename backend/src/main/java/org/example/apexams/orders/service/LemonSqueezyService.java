package org.example.apexams.orders.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.enrollments.service.EnrollmentService;
import org.example.apexams.orders.entity.OrderEntity;
import org.example.apexams.orders.entity.enums.OrderStatus;
import org.example.apexams.orders.repo.OrderRepository;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.users.entity.UserEntity;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class LemonSqueezyService implements PaymentProvider {

    private final RestTemplate restTemplate = new RestTemplate();
    private final OrderRepository orderRepository;
    private final EnrollmentService enrollmentService;
    private final ObjectMapper objectMapper;

    @Value("${lemonsqueezy.api.api-key}")
    private String apiKey;

    @Value("${lemonsqueezy.api.store-id}")
    private String storeId;

    @Value("${app.frontend.url}")
    private String frontendUrl;

    @Override
    public String createCheckoutSession(UserEntity user, List<TariffEntity> tariffs, String variantId) {
        String checkoutUrl = createLemonSqueezyCheckout(user, tariffs, variantId);
        String checkoutId = extractCheckoutId(checkoutUrl);

        // Создаем pending orders для каждого тарифа
        // Цену пока не знаем - получим из webhook
        for (TariffEntity tariff : tariffs) {
            saveOrder(user, tariff, checkoutId);
        }

        return checkoutUrl;
    }

    @Override
    @Transactional
    public void handleWebhook(String payload, String signature) {
        try {
            Map<String, Object> event = objectMapper.readValue(payload, Map.class);
            String eventName = getEventName(event);

            log.info("Processing LemonSqueezy webhook: {}", eventName);

            switch (eventName) {
                case "order_created" -> processOrderCreated(event);
                case "order_refunded" -> processOrderRefunded(event);
                default -> log.debug("Unhandled webhook event: {}", eventName);
            }
        } catch (Exception e) {
            log.error("Webhook processing failed: {}", e.getMessage(), e);
            throw new RuntimeException("Webhook processing failed", e);
        }
    }

    private String createLemonSqueezyCheckout(UserEntity user, List<TariffEntity> tariffs, String variantId) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.setBearerAuth(apiKey);

            Map<String, Object> requestBody = buildCheckoutRequest(user, tariffs, variantId);
            HttpEntity<Map<String, Object>> request = new HttpEntity<>(requestBody, headers);

            ResponseEntity<Map> response = restTemplate.exchange(
                    "https://api.lemonsqueezy.com/v1/checkouts",
                    HttpMethod.POST,
                    request,
                    Map.class
            );

            return extractCheckoutUrl(response.getBody());
        } catch (Exception e) {
            log.error("Failed to create checkout: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to create checkout session", e);
        }
    }

    private Map<String, Object> buildCheckoutRequest(UserEntity user, List<TariffEntity> tariffs, String variantId) {
        // Validate all tariffs have LemonSqueezy variant IDs
        tariffs.forEach(tariff -> {
            if (tariff.getPaddleVariantId() == null) {
                throw new IllegalStateException("LemonSqueezy variant ID not configured for tariff: " + tariff.getId());
            }
        });

        // Store tariff IDs in custom data for webhook processing
        String tariffIdsStr = tariffs.stream()
                .map(t -> t.getId().toString())
                .collect(Collectors.joining(","));

        String productName = tariffs.size() == 1
                ? tariffs.getFirst().getCourse().getTitle() + " - " + tariffs.getFirst().getTitle()
                : "Course Bundle (" + tariffs.size() + " courses)";

        String productDescription = tariffs.stream()
                .map(t -> t.getCourse().getTitle() + " - " + t.getTier().name())
                .collect(Collectors.joining(", "));

        return Map.of(
                "data", Map.of(
                        "type", "checkouts",
                        "attributes", Map.of(
                                "checkout_data", Map.of(
                                        "email", user.getEmail(),
                                        "custom", Map.of(
                                                "user_id", user.getId().toString(),
                                                "tariff_ids", tariffIdsStr,
                                                "item_count", tariffs.size()
                                        )
                                ),
                                "product_options", Map.of(
                                        "name", productName,
                                        "description", productDescription,
                                        "redirect_url", frontendUrl + "/checkout/success"
                                ),
                                "checkout_options", Map.of(
                                        "button_color", "#7C3AED"
                                )
                        ),
                        "relationships", Map.of(
                                "store", Map.of("data", Map.of("type", "stores", "id", storeId)),
                                "variant", Map.of("data", Map.of("type", "variants", "id", variantId))
                        )
                )
        );
    }

    private void saveOrder(UserEntity user, TariffEntity tariff, String checkoutId) {
        OrderEntity order = OrderEntity.builder()
                .user(user)
                .course(tariff.getCourse())
                .tariff(tariff)
                .lemonSqueezyCheckoutId(checkoutId)
                .status(OrderStatus.PENDING)
                .amountCents(0) // Будет обновлено из webhook
                .currency(tariff.getCurrency())
                .build();

        orderRepository.save(order);
        log.info("Order created: checkout={}, user={}, course={}", checkoutId, user.getEmail(), tariff.getCourse().getTitle());
    }

    private void processOrderCreated(Map<String, Object> event) {
        Map<String, Object> data = (Map<String, Object>) event.get("data");
        Map<String, Object> attributes = (Map<String, Object>) data.get("attributes");

        String lemonSqueezyOrderId = (String) data.get("id");
        String status = (String) attributes.get("status");
        String checkoutId = (String) attributes.get("identifier");

        // ВАЖНО: Получаем реальную цену от LemonSqueezy (уже со всеми скидками)
        int totalPaidCents = (Integer) attributes.get("total");

        if (!"paid".equals(status)) {
            log.warn("Order {} not paid, status: {}", lemonSqueezyOrderId, status);
            return;
        }

        // Найти все orders с этим checkoutId (может быть несколько для разных курсов)
        List<OrderEntity> orders = orderRepository.findAllByLemonSqueezyCheckoutId(checkoutId);

        if (orders.isEmpty()) {
            throw new IllegalArgumentException("No orders found for checkout: " + checkoutId);
        }

        // Распределяем финальную цену между orders
        int pricePerItem = totalPaidCents / orders.size();

        // Обработать каждый order
        for (OrderEntity order : orders) {
            if (order.getStatus() == OrderStatus.COMPLETED) {
                log.warn("Order {} already completed", order.getId());
                continue;
            }
            // Сохраняем реальную оплаченную цену
            order.setAmountCents(pricePerItem);
            completeOrder(order, lemonSqueezyOrderId);
            enrollmentService.enrollUser(order.getUser(), order.getCourse(), order.getTariff());

            log.info("User enrolled: user={}, course={}", order.getUser().getEmail(), order.getCourse().getTitle());
        }

        log.info("Checkout completed: {}, {} courses enrolled", lemonSqueezyOrderId, orders.size());
    }

    private void processOrderRefunded(Map<String, Object> event) {
        String lemonSqueezyOrderId = (String) ((Map<String, Object>) event.get("data")).get("id");

        // Найти все orders с этим lemonSqueezyOrderId
        List<OrderEntity> orders = orderRepository.findAllByLemonSqueezyOrderId(lemonSqueezyOrderId);

        for (OrderEntity order : orders) {
            order.setStatus(OrderStatus.REFUNDED);
            orderRepository.save(order);
        }

        log.info("Orders refunded: {}, count: {}", lemonSqueezyOrderId, orders.size());
    }

    private void completeOrder(OrderEntity order, String lemonSqueezyOrderId) {
        order.setStatus(OrderStatus.COMPLETED);
        order.setLemonSqueezyOrderId(lemonSqueezyOrderId);
        order.setCompletedAt(Instant.now());
        orderRepository.save(order);
    }

    private String extractCheckoutUrl(Map<String, Object> response) {
        Map<String, Object> data = (Map<String, Object>) response.get("data");
        Map<String, Object> attributes = (Map<String, Object>) data.get("attributes");
        return (String) attributes.get("url");
    }

    private String extractCheckoutId(String checkoutUrl) {
        return checkoutUrl.substring(checkoutUrl.lastIndexOf("/") + 1);
    }

    private String getEventName(Map<String, Object> event) {
        Map<String, Object> meta = (Map<String, Object>) event.get("meta");
        return (String) meta.get("event_name");
    }
}