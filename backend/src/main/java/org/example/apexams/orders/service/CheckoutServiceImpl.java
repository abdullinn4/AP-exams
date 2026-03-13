package org.example.apexams.orders.service;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.email.service.EmailService;
import org.example.apexams.enrollments.service.EnrollmentService;
import org.example.apexams.orders.dto.CheckoutResponse;
import org.example.apexams.orders.entity.OrderEntity;
import org.example.apexams.orders.entity.UserConsent;
import org.example.apexams.orders.entity.enums.OrderStatus;
import org.example.apexams.orders.repo.OrderRepository;
import org.example.apexams.orders.repo.UserConsentRepository;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.tariffs.repo.TariffRepository;
import org.example.apexams.users.dto.CheckoutPrepareRequest;
import org.example.apexams.users.entity.UserEntity;
import org.example.apexams.users.repo.UserRepository;
import org.example.apexams.users.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class CheckoutServiceImpl implements CheckoutService {
    private final TariffRepository tariffRepository;
    private final UserRepository userRepository;
    private final UserService userService;
    private final PaymentProvider paymentProvider;
    private final UserConsentRepository userConsentRepository;
    private final OrderRepository orderRepository;
    private final EmailService emailService;
    private final EnrollmentService enrollmentService;

    @Override
    @Transactional
    public CheckoutResponse prepareCheckout(CheckoutPrepareRequest request, HttpServletRequest httpRequest) {
        // 1. Валидация
        if (!Boolean.TRUE.equals(request.acceptedTerms())) {
            throw new IllegalArgumentException("Terms and Privacy Policy must be accepted");
        }

        // 2. Находим тарифы и пользователя
        List<TariffEntity> tariffs = findActiveTariffs(request.tariffIds());
        UserEntity user = findOrCreateUser(request);

        // Проверяем что пользователь еще не записан ни на один курс
        validateNoExistingEnrollments(user, tariffs);

        // 3. СОЗДАЕМ ORDER СРАЗУ со статусом PENDING
        List<OrderEntity> orders = createPendingOrders(user, tariffs);
        String checkoutId = orders.getFirst().getPayProCheckoutId();

        // 4. Сохраняем consent
        saveUserConsent(request, checkoutId, httpRequest);

        // 5. Создаем checkout URL в PayPro
        String checkoutUrl = paymentProvider.createCheckoutSession(user, tariffs, checkoutId);

        log.info("Checkout prepared: checkoutId={}, user={}, orders={}",
                checkoutId, user.getEmail(), orders.size());

        // Возвращаем РЕАЛЬНЫЙ orderId
        return new CheckoutResponse(checkoutId, checkoutUrl);
    }

    private List<OrderEntity> createPendingOrders(UserEntity user, List<TariffEntity> tariffs) {
        for (TariffEntity tariff : tariffs) {
            List<OrderEntity> oldPendingOrders = orderRepository
                    .findByUserIdAndCourseIdAndStatus(
                            user.getId(),
                            tariff.getCourse().getId(),
                            OrderStatus.PENDING
                    );

            if (!oldPendingOrders.isEmpty()) {
                log.info("Deleting {} old pending orders for user {} and course {}",
                        oldPendingOrders.size(), user.getEmail(), tariff.getCourse().getSlug());
                orderRepository.deleteAll(oldPendingOrders);
                orderRepository.flush(); // синхронизируем с БД
            }
        }

        String checkoutId = UUID.randomUUID().toString();

        List<OrderEntity> orders = tariffs.stream()
                .map(tariff -> {
                    OrderEntity order = OrderEntity.builder()
                            .user(user)
                            .course(tariff.getCourse())
                            .tariff(tariff)
                            .status(OrderStatus.PENDING)
                            .amountCents(0)  // Будет обновлено из webhook
                            .currency(tariff.getCurrency())
                            .payProCheckoutId(checkoutId)  // Связываем через checkoutId
                            .build();

                    return orderRepository.save(order);
                })
                .toList();

        log.info("Created {} pending orders with checkoutId={}", orders.size(), checkoutId);

        return orders;
    }

    private UserEntity findOrCreateUser(CheckoutPrepareRequest request) {

        // Проверяем что Discord nickname не занят другим пользователем
        userRepository.findByDiscordNickname(request.discordNickname())
                .ifPresent(existingUser -> {
                    if (!existingUser.getEmail().equalsIgnoreCase(request.email())) {
                        log.warn("Discord nickname already in use: {}", request.discordNickname());

                        throw new ResponseStatusException(
                                HttpStatus.BAD_REQUEST,
                                "This Discord nickname is already linked to another account."
                        );
                    }
                });

        return userRepository.findByEmail(request.email())
                .map(user -> {
                    // Проверяем совпадает ли Discord
                    if (!user.getDiscordNickname().equalsIgnoreCase(request.discordNickname())) {
                        log.warn("Discord nickname mismatch for user {}: existing={}, request={}",
                                request.email(), user.getDiscordNickname(), request.discordNickname());

                        throw new ResponseStatusException(
                                HttpStatus.BAD_REQUEST,
                                "The Discord nickname does not match the one associated with this account."
                        );
                    }

                    return user;
                })
                .orElseGet(() -> {
                    // Создаем пользователя
                    String password = userService.createUser(request);
                    emailService.sendPasswordEmail(request.email(), password);

                    log.info("Created user and sent password email: {}", request.email());

                    return userRepository.findByEmail(request.email())
                            .orElseThrow(() -> new RuntimeException("Failed to create user"));
                });
    }

    private List<TariffEntity> findActiveTariffs(List<String> tariffIds) {
        // Конвертируем String -> UUID
        List<UUID> uuidList = tariffIds.stream()
                .map(UUID::fromString)
                .toList();

        List<TariffEntity> tariffs = tariffRepository.findAllById(uuidList);

        if (tariffs.size() != tariffIds.size()) {
            throw new IllegalArgumentException("Some tariffs not found");
        }

        tariffs.forEach(tariff -> {
            if (!tariff.getIsActive()) {
                throw new IllegalStateException("Tariff is not active: " + tariff.getId());
            }
            if (tariff.getPayProVariantId() == null) {
                throw new IllegalStateException("PayPro variant ID not configured for tariff: " + tariff.getId());
            }
        });

        return tariffs;
    }

    private void saveUserConsent(CheckoutPrepareRequest request, String checkoutId, HttpServletRequest httpRequest) {
        UserConsent consent = UserConsent.builder()
                .email(request.email())
                .checkoutId(checkoutId)
                .acceptedTerms(request.acceptedTerms())
                .acceptedAt(parseAcceptedAt(request.acceptedAt()))
                .ipAddress(getClientIp(httpRequest))
                .userAgent(getUserAgent(httpRequest))
                .build();

        userConsentRepository.save(consent);

        log.info("USER_CONSENT_RECORDED: checkoutId={}, email={}, acceptedAt={}, ip={}",
                checkoutId, request.email(), request.acceptedAt(), consent.getIpAddress());
    }


    private Instant parseAcceptedAt(String acceptedAt) {
        try {
            return Instant.parse(acceptedAt);
        } catch (Exception e) {
            log.warn("Failed to parse acceptedAt timestamp: {}, using current time", acceptedAt);
            return Instant.now();
        }
    }

    private String getClientIp(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("X-Real-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        // Берем первый IP из списка (если через прокси)
        if (ip != null && ip.contains(",")) {
            ip = ip.split(",")[0].trim();
        }
        return ip != null ? ip : "unknown";
    }

    private String getUserAgent(HttpServletRequest request) {
        String userAgent = request.getHeader("User-Agent");
        return userAgent != null ? userAgent : "unknown";
    }
    /**
     * Проверяет что пользователь еще не записан ни на один из выбранных курсов.
     * @throws IllegalStateException если хотя бы один курс уже куплен
     */
    private void validateNoExistingEnrollments(UserEntity user, List<TariffEntity> tariffs) {
        for (TariffEntity tariff : tariffs) {
            boolean hasEnrollment = enrollmentService.hasAccess(
                    user.getId(),
                    tariff.getCourse().getId()
            );

            if (hasEnrollment) {
                String courseName = tariff.getCourse().getTitle();
                log.warn("User {} already enrolled in course {}",
                        user.getEmail(), courseName);
                throw new IllegalStateException(
                        "You are already enrolled in one or more selected courses. " +
                                "Please remove already purchased courses from your cart."
                );
            }
        }
    }
}