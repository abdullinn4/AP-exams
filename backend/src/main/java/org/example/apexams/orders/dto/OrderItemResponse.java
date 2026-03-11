package org.example.apexams.orders.dto;

import lombok.Builder;

import java.util.UUID;

@Builder
public record OrderItemResponse(
        UUID orderId,
        String courseId,
        String courseTitle,
        String courseSlug,
        String tariffId,
        String tariffTitle,
        String tariffTier,
        Integer priceCents,
        String currency,
        String status
) {}
