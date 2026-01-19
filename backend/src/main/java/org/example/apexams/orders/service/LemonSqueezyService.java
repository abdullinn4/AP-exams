package org.example.apexams.orders.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.example.apexams.courses.entity.CourseEntity;
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
import java.util.Map;

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
    public String createCheckoutSession(UserEntity user, CourseEntity course, TariffEntity tariff) {
        String checkoutUrl = createLemonSqueezyCheckout(user, course, tariff);
        saveOrder(user, course, tariff, extractCheckoutId(checkoutUrl));
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

    private String createLemonSqueezyCheckout(UserEntity user, CourseEntity course, TariffEntity tariff) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.setBearerAuth(apiKey);

            Map<String, Object> requestBody = buildCheckoutRequest(user, course, tariff);
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

    private Map<String, Object> buildCheckoutRequest(UserEntity user, CourseEntity course, TariffEntity tariff) {
        if (tariff.getLemonSqueezyVariantId() == null) {
            throw new IllegalStateException("LemonSqueezy variant ID not configured for tariff: " + tariff.getId());
        }

        return Map.of(
                "data", Map.of(
                        "type", "checkouts",
                        "attributes", Map.of(
                                "checkout_data", Map.of(
                                        "email", user.getEmail(),
                                        "custom", Map.of(
                                                "user_id", user.getId().toString(),
                                                "course_id", course.getId().toString(),
                                                "tariff_id", tariff.getId().toString()
                                        )
                                ),
                                "product_options", Map.of(
                                        "name", course.getTitle() + " - " + tariff.getTitle(),
                                        "description", tariff.getTier().name() + " tier",
                                        "redirect_url", frontendUrl + "/checkout/success"
                                )
                        ),
                        "relationships", Map.of(
                                "store", Map.of("data", Map.of("type", "stores", "id", storeId)),
                                "variant", Map.of("data", Map.of("type", "variants", "id", tariff.getLemonSqueezyVariantId()))
                        )
                )
        );
    }

    private void saveOrder(UserEntity user, CourseEntity course, TariffEntity tariff, String checkoutId) {
        OrderEntity order = OrderEntity.builder()
                .user(user)
                .course(course)
                .tariff(tariff)
                .lemonSqueezyCheckoutId(checkoutId)
                .status(OrderStatus.PENDING)
                .amountCents(tariff.getPriceCents())
                .currency(tariff.getCurrency())
                .build();

        orderRepository.save(order);
        log.info("Order created: checkout={}, user={}", checkoutId, user.getEmail());
    }

    private void processOrderCreated(Map<String, Object> event) {
        Map<String, Object> data = (Map<String, Object>) event.get("data");
        Map<String, Object> attributes = (Map<String, Object>) data.get("attributes");

        String orderId = (String) data.get("id");
        String status = (String) attributes.get("status");
        String checkoutId = (String) attributes.get("identifier");

        if (!"paid".equals(status)) {
            log.warn("Order {} not paid, status: {}", orderId, status);
            return;
        }

        OrderEntity order = findOrderByCheckoutId(checkoutId);

        if (order.getStatus() == OrderStatus.COMPLETED) {
            log.warn("Order {} already completed", order.getId());
            return;
        }

        completeOrder(order, orderId);
        enrollmentService.enrollUser(order.getUser(), order.getCourse(), order.getTariff());

        log.info("Order completed: {}, user enrolled: {}", orderId, order.getUser().getEmail());
    }

    private void processOrderRefunded(Map<String, Object> event) {
        String orderId = (String) ((Map<String, Object>) event.get("data")).get("id");
        OrderEntity order = findOrderByPaymentId(orderId);

        order.setStatus(OrderStatus.REFUNDED);
        orderRepository.save(order);

        log.info("Order refunded: {}", orderId);
    }

    private void completeOrder(OrderEntity order, String paymentId) {
        order.setStatus(OrderStatus.COMPLETED);
        order.setLemonSqueezyOrderId(paymentId);
        order.setCompletedAt(Instant.now());
        orderRepository.save(order);
    }

    private OrderEntity findOrderByCheckoutId(String checkoutId) {
        return orderRepository.findByLemonSqueezyCheckoutId(checkoutId)
                .orElseThrow(() -> new IllegalArgumentException("Order not found: " + checkoutId));
    }

    private OrderEntity findOrderByPaymentId(String paymentId) {
        return orderRepository.findByLemonSqueezyOrderId(paymentId)
                .orElseThrow(() -> new IllegalArgumentException("Order not found: " + paymentId));
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