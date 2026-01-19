package org.example.apexams.orders.dto;

import org.example.apexams.orders.entity.enums.OrderStatus;
import org.example.apexams.tariffs.entity.enums.TariffTier;

import java.time.Instant;
import java.util.UUID;

public record OrderResponse(
        UUID id,
        UUID userId,
        String userEmail,
        String userDiscordNickname,
        UUID courseId,
        String courseTitle,
        UUID tariffId,
        TariffTier tariffTier,
        String lemonsqueezyCheckoutId,
        String lemonsqueezyOrderId,
        OrderStatus status,
        Integer amountCents,
        String currency,
        Instant createdAt,
        Instant completedAt
) {
}
