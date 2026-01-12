package org.example.apexams.orders.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.orders.dto.CheckoutResponse;
import org.example.apexams.orders.entity.OrderEntity;
import org.example.apexams.orders.repo.OrderRepository;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.tariffs.repo.TariffRepository;
import org.example.apexams.users.dto.CheckoutPrepareRequest;
import org.example.apexams.users.entity.UserEntity;
import org.example.apexams.users.repo.UserRepository;
import org.example.apexams.users.service.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class CheckoutServiceImpl implements CheckoutService {
    private final OrderRepository orderRepository;
    private final TariffRepository tariffRepository;
    private final UserRepository userRepository;
    private final UserService userService;

    @Value("${stripe.api.key}")
    private String stripeApiKey;

    @Value("${app.frontend.url}")
    private String frontendUrl;

    @PostConstruct
    public void init() {
        Stripe.apiKey = stripeApiKey;
    }

    @Override
    @Transactional
    public CheckoutResponse prepareCheckout(CheckoutPrepareRequest request) {
        TariffEntity tariff = tariffRepository.findById(request.tariffId())
                .orElseThrow(() -> new IllegalArgumentException("Tariff not found"));

        if (!tariff.getIsActive()) {
            throw new IllegalStateException("Tariff is not active");
        }

        CourseEntity course = tariff.getCourse();

        // Проверяем существует ли пользователь ДО создания
        boolean isNewUser = !userRepository.existsByEmail(request.email());

        UserEntity user = userRepository.findByEmail(request.email())
                .orElseGet(() -> {
                    userService.createUser(request);
                    return userRepository.findByEmail(request.email())
                            .orElseThrow(() -> new RuntimeException("Failed to create user"));
                });

        // Создаём заказ
        OrderEntity order = OrderEntity.builder()
                .user(user)
                .course(course)
                .tariff(tariff)
                .amountCents(tariff.getPriceCents())
                .currency(tariff.getCurrency())
                .build();

        order = orderRepository.save(order);

        // Создаём Stripe Checkout Session
        try {
            SessionCreateParams params = SessionCreateParams.builder()
                    .setMode(SessionCreateParams.Mode.PAYMENT)
                    .setSuccessUrl(frontendUrl + "/checkout/success?session_id={CHECKOUT_SESSION_ID}")
                    .setCancelUrl(frontendUrl + "/checkout/cancel")
                    .setCustomerEmail(request.email())
                    .addLineItem(
                            SessionCreateParams.LineItem.builder()
                                    .setPriceData(
                                            SessionCreateParams.LineItem.PriceData.builder()
                                                    .setCurrency(tariff.getCurrency().toLowerCase())
                                                    .setUnitAmount((long) tariff.getPriceCents())
                                                    .setProductData(
                                                            SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                                                    .setName(course.getTitle() + " - " + tariff.getTitle())
                                                                    .setDescription(tariff.getTier().name() + " tier")
                                                                    .build()
                                                    )
                                                    .build()
                                    )
                                    .setQuantity(1L)
                                    .build()
                    )
                    .putMetadata("orderId", order.getId().toString())
                    .putMetadata("userId", user.getId().toString())
                    .putMetadata("tariffId", tariff.getId().toString())
                    .putMetadata("discordNickname", request.discordNickname())
                    .putMetadata("isNewUser", String.valueOf(isNewUser))
                    .build();

            Session session = Session.create(params);

            order.setStripeSessionId(session.getId());
            orderRepository.save(order);

            log.info("Stripe session created: {} for order: {}", session.getId(), order.getId());

            return new CheckoutResponse(order.getId(), session.getUrl());

        } catch (StripeException e) {
            log.error("Failed to create Stripe session: {}", e.getMessage());
            throw new RuntimeException("Failed to create checkout session", e);
        }
    }
}
