package org.example.apexams.orders.service;

import com.stripe.exception.SignatureVerificationException;
import com.stripe.model.Event;
import com.stripe.model.checkout.Session;
import com.stripe.net.Webhook;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.email.service.EmailService;
import org.example.apexams.enrollments.service.EnrollmentService;
import org.example.apexams.orders.entity.OrderEntity;
import org.example.apexams.orders.entity.enums.OrderStatus;
import org.example.apexams.orders.repo.OrderRepository;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.tariffs.repo.TariffRepository;
import org.example.apexams.users.entity.UserEntity;
import org.example.apexams.users.repo.UserRepository;
import org.example.apexams.users.service.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class StripeWebhookService {
    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final TariffRepository tariffRepository;
    private final EnrollmentService enrollmentService;
    private final UserService userService;
    private final EmailService emailService;

    @Value("${stripe.webhook.secret}")
    private String webhookSecret;

    @Transactional
    public void handleWebhook(String payload, String sigHeader) {
        Event event;

        try {
            event = Webhook.constructEvent(payload, sigHeader, webhookSecret);
        } catch (SignatureVerificationException e) {
            log.error("Invalid webhook signature: {}", e.getMessage());
            throw new IllegalArgumentException("Invalid signature");
        }

        log.info("Received Stripe webhook: {}", event.getType());

        if ("checkout.session.completed".equals(event.getType())) {
            handleCheckoutCompleted(event);
        }
    }

    private void handleCheckoutCompleted(Event event) {
        Session session = (Session) event.getDataObjectDeserializer()
                .getObject()
                .orElseThrow(() -> new RuntimeException("Failed to deserialize session"));

        String orderId = session.getMetadata().get("orderId");
        String userId = session.getMetadata().get("userId");
        String tariffId = session.getMetadata().get("tariffId");
        String discordNickname = session.getMetadata().get("discordNickname");
        boolean isNewUser = Boolean.parseBoolean(session.getMetadata().get("isNewUser"));

        log.info("Processing checkout: orderId={}", orderId);

        OrderEntity order = orderRepository.findById(UUID.fromString(orderId))
                .orElseThrow(() -> new RuntimeException("Order not found"));

        // Идемпотентность - если заказ уже обработан, пропускаем
        if (order.getStatus() == OrderStatus.COMPLETED) {
            log.warn("Order already completed: {}", orderId);
            return;
        }

        UserEntity user = userRepository.findById(UUID.fromString(userId))
                .orElseThrow(() -> new RuntimeException("User not found"));

        TariffEntity tariff = tariffRepository.findById(UUID.fromString(tariffId))
                .orElseThrow(() -> new RuntimeException("Tariff not found"));

        CourseEntity course = tariff.getCourse();

        // Обновляем Discord nickname
        if (discordNickname != null && !discordNickname.isEmpty()) {
            try {
                userService.updateDiscordNickname(user.getEmail(), discordNickname);
            } catch (Exception e) {
                log.error("Failed to update Discord nickname: {}", e.getMessage());
            }
        }

        // Создаём enrollment
        enrollmentService.enrollUser(user, course, tariff);

        // Обновляем заказ
        order.setStatus(OrderStatus.COMPLETED);
        order.setStripePaymentIntentId(session.getPaymentIntent());
        order.setCompletedAt(Instant.now());
        orderRepository.save(order);


        try {
            if (isNewUser) {
                // Новый пользователь - отправляем пароль
                String newPassword = userService.resetPassword(user.getEmail());
                emailService.sendPasswordEmail(user.getEmail(), newPassword);
                emailService.sendWelcomeEmail(user.getEmail(), course.getTitle());
                log.info("Sent password and welcome email to new user: {}", user.getEmail());
            } else {
                // Существующий пользователь - только подтверждение покупки
                emailService.sendPurchaseConfirmationEmail(user.getEmail(), course.getTitle());
                log.info("Sent purchase confirmation to existing user: {}", user.getEmail());
            }
        } catch (Exception e) {
            log.error("Failed to send emails: {}", e.getMessage());
        }

        log.info("Checkout completed: orderId={}, isNewUser={}", orderId, isNewUser);
    }
}
