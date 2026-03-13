package org.example.apexams.orders.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.email.service.EmailService;
import org.example.apexams.enrollments.service.EnrollmentService;
import org.example.apexams.orders.entity.OrderEntity;
import org.example.apexams.orders.entity.enums.OrderStatus;
import org.example.apexams.orders.repo.OrderRepository;
import org.example.apexams.orders.repo.UserConsentRepository;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.users.dto.CheckoutPrepareRequest;
import org.example.apexams.users.entity.UserEntity;
import org.example.apexams.users.service.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.util.UriComponentsBuilder;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.time.Instant;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class PayProService implements PaymentProvider {

    private final OrderRepository orderRepository;
    private final EnrollmentService enrollmentService;
    private final EmailService emailService;

    @Value("${paypro.checkout.base-url}")
    private String checkoutBaseUrl;

    @Value("${paypro.page-template-id}")
    private String pageTemplateId;

    @Value("${paypro.coupon.2-products}")
    private String coupon2Products;

    @Value("${paypro.coupon.3-products}")
    private String coupon3Products;

    @Value("${paypro.coupon.4-plus-products}")
    private String coupon4PlusProducts;

    @Value("${paypro.secret-key}")
    private String secretKey;

    @Value("${paypro.test-mode}")
    private boolean testMode;

    @Value("${paypro.validation-key}")
    private String validationKey;

    @Value("${app.frontend.url}")
    private String frontendUrl;

    @Value("${app.backend.url}")
    private String backendUrl;

    @Override
    public String createCheckoutSession(UserEntity user, List<TariffEntity> tariffs, String checkoutId) {
        try {
            // Валидация тарифов
            validateTariffs(tariffs);

            // Строим checkout URL с несколькими продуктами
            String checkoutUrl = buildCheckoutUrl(user, tariffs, checkoutId);

            log.info("PayPro checkout URL created: checkoutId={}, user={}, products={}",
                    checkoutId, user.getEmail(), tariffs.size());

            return checkoutUrl;

        } catch (Exception e) {
            log.error("Failed to create PayPro checkout: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to create checkout session", e);
        }
    }

    @Override
    @Transactional
    public void handleWebhook(String payload, String signature) {
        try {
            Map<String, String> params = parseFormUrlEncoded(payload);

            String ipnTypeId = params.get("IPN_TYPE_ID");
            String ipnTypeName = params.get("IPN_TYPE_NAME");
            String testMode = params.get("TEST_MODE");
            boolean isTestMode = "1".equals(testMode);

            log.info("Processing PayPro webhook: type={} ({}), testMode={}",
                    ipnTypeName, ipnTypeId, isTestMode ? "TEST" : "LIVE");

            // В test mode НЕ проверяем signature (PayPro может не отправлять его)
            if (!isTestMode) {
                if (!verifyWebhookSignature(params, signature)) {
                    log.error("Invalid webhook signature!");
                    throw new SecurityException("Invalid webhook signature");
                }
            } else {
                log.warn("Skipping signature verification in test mode");
            }

            // Обрабатываем разные типы событий
            switch (ipnTypeId) {
                case "1" -> processOrderCharged(params);
                case "2" -> processOrderRefunded(params);
                case "3" -> processOrderChargedBack(params);
                case "5" -> processOrderPartiallyRefunded(params);
                default -> log.debug("Unhandled webhook event: {} ({})", ipnTypeName, ipnTypeId);
            }

        } catch (IllegalArgumentException | IllegalStateException e) {
            log.error("Webhook ignored due to validation error: {}", e.getMessage());
        } catch (Exception e) {
            log.error("Webhook processing failed (will retry): {}", e.getMessage(), e);
            throw new RuntimeException("Webhook processing failed", e);
        }
    }

    private void validateTariffs(List<TariffEntity> tariffs) {
        if (tariffs.isEmpty()) {
            throw new IllegalArgumentException("No tariffs provided");
        }

        tariffs.forEach(tariff -> {
            if (!tariff.getIsActive()) {
                throw new IllegalStateException("Tariff is not active: " + tariff.getId());
            }
            if (tariff.getPayProVariantId() == null || tariff.getPayProVariantId().isEmpty()) {
                throw new IllegalStateException("PayPro variant ID not configured for tariff: " + tariff.getId());
            }
        });
    }

    private String buildCheckoutUrl(UserEntity user, List<TariffEntity> tariffs, String checkoutId) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(checkoutBaseUrl);

        // PayPro использует индексацию с 1
        for (int i = 0; i < tariffs.size(); i++) {
            TariffEntity tariff = tariffs.get(i);
            int index = i + 1;  // Индексация с 1
            builder.queryParam("products[" + index + "][id]", tariff.getPayProVariantId());
            // НЕ добавляем quantity - PayPro использует по умолчанию 1
        }

        // Купон (если есть)
        String couponCode = getCouponCode(tariffs.size());
        if (couponCode != null) {
            builder.queryParam("coupon-code-to-add", couponCode);
        }

        // Page template
        builder.queryParam("page-template", pageTemplateId);
        builder.queryParam("billing-email", user.getEmail());

        // ВСЕГДА передаем x-checkout-id (даже в test mode!)
        builder.queryParam("x-checkout-id", checkoutId);

        String tariffIds = tariffs.stream()
                .map(t -> t.getId().toString())
                .reduce((a, b) -> a + "," + b)
                .orElse("");
        builder.queryParam("x-tariff-ids", tariffIds);


        if (testMode) {
            if (secretKey == null || secretKey.isBlank()) {
                throw new IllegalStateException("PayPro secret key required for test mode");
            }

            builder.queryParam("use-test-mode", "true");
            builder.queryParam("secret-key", secretKey);
            log.info("Test mode enabled for checkout: {}", checkoutId);
        }
        builder.queryParam("success-url", backendUrl + "/api/v1/paypro/success");
        builder.queryParam("cancel-url", backendUrl + "/api/v1/paypro/cancel");

        return builder.build().toUriString();
    }

    private String getCouponCode(int productCount) {
        return switch (productCount) {
            case 2 -> coupon2Products;
            case 3 -> coupon3Products;
            case 4, 5, 6 -> coupon4PlusProducts;
            default -> null;
        };
    }

    private void processOrderCharged(Map<String, String> params) {
        String payProOrderId = params.get("ORDER_ID");
        String orderStatus = params.get("ORDER_STATUS");
        String customerEmail = params.get("BILLING_EMAIL");
        String checkoutId = params.get("x-checkout-id");
        String testMode = params.get("TEST_MODE");
        boolean isTestOrder = "1".equals(testMode);

        if (checkoutId == null || checkoutId.isBlank()) {
            log.error("Missing checkout ID in webhook for order {}", payProOrderId);
            throw new IllegalArgumentException("Missing X_CHECKOUT_ID in webhook");
        }

        log.info("Processing OrderCharged: orderId={}, checkoutId={}, email={}, status={}, testMode={}",
                payProOrderId, checkoutId, customerEmail, orderStatus, isTestOrder ? "TEST" : "LIVE");

        // Проверяем статус
        if (!"Processed".equals(orderStatus)) {
            log.warn("Order {} not processed, status: {}", payProOrderId, orderStatus);
            return;
        }

        // Находим orders по checkoutId
        List<OrderEntity> orders = orderRepository.findAllByPayProCheckoutId(checkoutId);

        if (orders.isEmpty()) {
            log.error("No orders found for checkoutId: {}", checkoutId);
            return;
        }
        // Проверяем что orders еще не обработаны (защита от дубликатов webhook)
        boolean allCompleted = orders.stream().allMatch(o -> o.getStatus() == OrderStatus.COMPLETED);
        if (allCompleted) {
            log.warn("All orders already completed for checkoutId: {}, skipping duplicate webhook", checkoutId);
            return;
        }

        // Получаем финальную сумму в vendor currency (USD)
        String vendorCurrency = params.get("VENDOR_BALANCE_CURRENCY_CODE");
        String vendorAmountStr = params.get("ORDER_BALANCE_CURRENCY_VENDOR_AMOUNT");
        if (vendorAmountStr == null || vendorAmountStr.isBlank()) {
            log.error("Vendor amount missing in webhook for order {}", payProOrderId);
            throw new IllegalArgumentException("Missing ORDER_BALANCE_CURRENCY_VENDOR_AMOUNT");
        }

        double vendorAmount;
        try {
            vendorAmount = Double.parseDouble(vendorAmountStr);
        } catch (NumberFormatException e) {
            log.error("Invalid vendor amount format: {}", vendorAmountStr);
            throw new IllegalArgumentException("Invalid vendor amount: " + vendorAmountStr);
        }
        int totalAmountCents = (int) (vendorAmount * 100);

        // Распределяем сумму между orders пропорционально их ценам
        int totalPriceCents = orders.stream()
                .mapToInt(o -> o.getTariff().getPriceCents())
                .sum();

        // Собираем названия курсов для email
        List<String> courseNames = new ArrayList<>();

        int remaining = totalAmountCents;

        // Обрабатываем каждый order
        for (int i = 0; i < orders.size(); i++) {
            OrderEntity order = orders.get(i);

            if (order.getStatus() == OrderStatus.COMPLETED) {
                log.warn("Order {} already completed", order.getId());
                continue;
            }

            // Вычисляем сумму для этого order пропорционально
            int orderAmountCents;

            if (i == orders.size() - 1) {
                // Последнему заказу отдаем остаток
                orderAmountCents = remaining;
            } else {
                // Пропорциональное распределение
                int orderPriceCents = order.getTariff().getPriceCents();
                orderAmountCents = (int) ((double) totalAmountCents * orderPriceCents / totalPriceCents);
                remaining -= orderAmountCents;
            }

            // Обновляем order
            order.setPayProOrderId(payProOrderId);
            order.setStatus(OrderStatus.COMPLETED);
            order.setAmountCents(orderAmountCents);
            order.setCurrency(vendorCurrency);
            order.setCompletedAt(Instant.now());
            orderRepository.save(order);

            // Создаем enrollment
            enrollmentService.enrollUser(order.getUser(), order.getCourse(), order.getTariff());

            // Собираем название курса
            courseNames.add(order.getCourse().getTitle());

            log.info("User enrolled: user={}, course={}, tier={}, amount={}, orderId={}",
                    order.getUser().getEmail(),
                    order.getCourse().getTitle(),
                    order.getTariff().getTier(),
                    orderAmountCents,
                    order.getId());
        }

        // Отправляем email (для тестовых тоже, чтобы проверить)

        if (!orders.isEmpty()) {
            try {
                String userEmail = orders.getFirst().getUser().getEmail();
                emailService.sendPurchaseConfirmationEmail(userEmail, courseNames);

                log.info("Purchase confirmation email sent to: {} (testMode={})",
                        userEmail, isTestOrder ? "TEST" : "LIVE");
            } catch (Exception e) {
                log.error("Failed to send purchase confirmation email: {}", e.getMessage(), e);
            }
        }

        log.info("Checkout completed: payProOrderId={}, checkoutId={}, {} courses enrolled, testMode={}",
                payProOrderId, checkoutId, orders.size(), isTestOrder ? "TEST" : "LIVE");
    }

    private void processOrderRefunded(Map<String, String> params) {
        String payProOrderId = params.get("ORDER_ID");
        String refundReason = params.get("ACTION_REASON");

        log.info("Processing OrderRefunded: orderId={}, reason={}", payProOrderId, refundReason);

        List<OrderEntity> orders = orderRepository.findAllByPayProOrderId(payProOrderId);

        for (OrderEntity order : orders) {
            order.setStatus(OrderStatus.REFUNDED);
            orderRepository.save(order);

            try {
                enrollmentService.revokeEnrollment(order.getUser(), order.getCourse());
                log.info("Enrollment revoked: user={}, course={}",
                        order.getUser().getEmail(),
                        order.getCourse().getTitle());
            } catch (Exception e) {
                log.error("Failed to revoke enrollment for order {}: {}", order.getId(), e.getMessage());
            }
        }

        log.info("Orders refunded: payProOrderId={}, count={}", payProOrderId, orders.size());
    }

    private void processOrderChargedBack(Map<String, String> params) {
        String payProOrderId = params.get("ORDER_ID");

        log.info("Processing OrderChargedBack: orderId={}", payProOrderId);

        List<OrderEntity> orders = orderRepository.findAllByPayProOrderId(payProOrderId);

        for (OrderEntity order : orders) {
            order.setStatus(OrderStatus.CHARGEBACK);
            orderRepository.save(order);

            try {
                enrollmentService.revokeEnrollment(order.getUser(), order.getCourse());
                log.info("Enrollment revoked due to chargeback: user={}, course={}",
                        order.getUser().getEmail(),
                        order.getCourse().getTitle());
            } catch (Exception e) {
                log.error("Failed to revoke enrollment for order {}: {}", order.getId(), e.getMessage());
            }
        }

        log.info("Orders charged back: payProOrderId={}, count={}", payProOrderId, orders.size());
    }

    private void processOrderPartiallyRefunded(Map<String, String> params) {
        String payProOrderId = params.get("ORDER_ID");
        String refundedAmountStr = params.get("ORDER_REFUNDED");

        log.info("Processing OrderPartiallyRefunded: orderId={}, refundedAmount={}",
                payProOrderId, refundedAmountStr);

        log.warn("Partial refund handling not fully implemented for order: {}", payProOrderId);
    }

    private boolean verifyWebhookSignature(Map<String, String> params, String receivedSignature) {
        try {
            String orderId = params.get("ORDER_ID");
            String orderStatus = params.get("ORDER_STATUS");
            String orderTotalAmount = params.get("ORDER_TOTAL_AMOUNT");
            String customerEmail = params.get("BILLING_EMAIL");
            String testMode = params.get("TEST_MODE");
            String ipnTypeName = params.get("IPN_TYPE_NAME");

            // Формируем строку для подписи
            String signatureString = orderId + orderStatus + orderTotalAmount +
                    customerEmail + validationKey + testMode + ipnTypeName;

            // Вычисляем SHA256
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(signatureString.getBytes(StandardCharsets.UTF_8));

            // Конвертируем в hex
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }

            String calculatedSignature = hexString.toString();

            boolean isValid = calculatedSignature.equals(receivedSignature);

            if (!isValid) {
                log.error("Signature mismatch! Calculated: {}, Received: {}",
                        calculatedSignature, receivedSignature);
            }

            return isValid;

        } catch (Exception e) {
            log.error("Failed to verify signature: {}", e.getMessage(), e);
            return false;
        }
    }

    private Map<String, String> parseFormUrlEncoded(String payload) {
        try {
            Map<String, String> params = new HashMap<>();
            String[] pairs = payload.split("&");
            for (String pair : pairs) {
                String[] keyValue = pair.split("=", 2);
                if (keyValue.length == 2) {
                    String key = java.net.URLDecoder.decode(keyValue[0], StandardCharsets.UTF_8);
                    String value = java.net.URLDecoder.decode(keyValue[1], StandardCharsets.UTF_8);
                    params.put(key, value);
                }
            }
            return params;
        } catch (Exception e) {
            log.error("Failed to parse form-urlencoded payload: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to parse webhook payload", e);
        }
    }
}
