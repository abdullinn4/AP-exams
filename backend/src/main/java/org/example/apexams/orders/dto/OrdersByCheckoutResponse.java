package org.example.apexams.orders.dto;

import lombok.Builder;

import java.util.List;

@Builder
public record OrdersByCheckoutResponse(
        String checkoutId,
        String userEmail,
        String discordNickname,
        List<OrderItemResponse> items,
        String overallStatus, // "pending", "completed", "partial"
        Integer totalAmountCents,
        String currency
) {}