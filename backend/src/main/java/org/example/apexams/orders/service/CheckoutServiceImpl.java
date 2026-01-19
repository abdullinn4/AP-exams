package org.example.apexams.orders.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.orders.dto.CheckoutResponse;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.tariffs.repo.TariffRepository;
import org.example.apexams.users.dto.CheckoutPrepareRequest;
import org.example.apexams.users.entity.UserEntity;
import org.example.apexams.users.repo.UserRepository;
import org.example.apexams.users.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class CheckoutServiceImpl implements CheckoutService {
    private final TariffRepository tariffRepository;
    private final UserRepository userRepository;
    private final UserService userService;
    private final PaymentProvider paymentProvider;

    @Override
    @Transactional
    public CheckoutResponse prepareCheckout(CheckoutPrepareRequest request) {
        TariffEntity tariff = findActiveTariff(request.tariffId());
        UserEntity user = findOrCreateUser(request);

        String checkoutUrl = paymentProvider.createCheckoutSession(user, tariff.getCourse(), tariff);

        log.info("Checkout prepared: user={}, tariff={}", user.getEmail(), tariff.getTitle());
        return new CheckoutResponse(UUID.randomUUID(), checkoutUrl);
    }

    private TariffEntity findActiveTariff(UUID tariffId) {
        TariffEntity tariff = tariffRepository.findById(tariffId)
                .orElseThrow(() -> new IllegalArgumentException("Tariff not found"));

        if (!tariff.getIsActive()) {
            throw new IllegalStateException("Tariff is not active");
        }

        return tariff;
    }

    private UserEntity findOrCreateUser(CheckoutPrepareRequest request) {
        return userRepository.findByEmail(request.email())
                .orElseGet(() -> {
                    userService.createUser(request);
                    return userRepository.findByEmail(request.email())
                            .orElseThrow(() -> new RuntimeException("Failed to create user"));
                });
    }
}
