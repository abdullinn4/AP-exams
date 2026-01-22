package org.example.apexams.promocodes.dto;

import lombok.Builder;

import java.math.BigDecimal;

@Builder
public record PromoCodeValidationResponse(
        boolean valid,
        String message,
        Integer discountPercent,
        BigDecimal originalPrice,
        BigDecimal discountAmount,
        BigDecimal finalPrice
) {}