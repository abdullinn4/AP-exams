package org.example.apexams.promocodes.service;

import org.example.apexams.promocodes.dto.PromoCodeValidationRequest;
import org.example.apexams.promocodes.dto.PromoCodeValidationResponse;
import org.example.apexams.promocodes.entity.PromoCodeEntity;

import java.util.UUID;

public interface PromoCodeService {
    PromoCodeValidationResponse validateAndApply(PromoCodeValidationRequest request);

    void incrementUsage(String promoCodeId);

    PromoCodeEntity createPromoCode(PromoCodeEntity promoCode);
}
