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

    @Override
    @Transactional
    public CheckoutResponse prepareCheckout(CheckoutPrepareRequest request) {
        List<TariffEntity> tariffs = findActiveTariffs(request.tariffIds());
        UserEntity user = findOrCreateUser(request);

        // Просто передаем variantId от фронта в LemonSqueezy
        String checkoutUrl = paymentProvider.createCheckoutSession(
                user,
                tariffs,
                request.variantId()
        );

        log.info("Checkout prepared: user={}, tariffs={}, variantId={}",
                user.getEmail(), tariffs.size(), request.variantId());
        return new CheckoutResponse(UUID.randomUUID(), checkoutUrl);
    }

    private List<TariffEntity> findActiveTariffs(List<UUID> tariffIds) {
        List<TariffEntity> tariffs = tariffRepository.findAllById(tariffIds);

        if (tariffs.size() != tariffIds.size()) {
            throw new IllegalArgumentException("Some tariffs not found");
        }

        tariffs.forEach(tariff -> {
            if (!tariff.getIsActive()) {
                throw new IllegalStateException("Tariff is not active: " + tariff.getId());
            }
        });

        return tariffs;
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
