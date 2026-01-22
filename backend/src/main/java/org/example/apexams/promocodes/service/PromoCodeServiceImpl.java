package org.example.apexams.promocodes.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.util.MoneyUtils;
import org.example.apexams.promocodes.dto.PromoCodeValidationRequest;
import org.example.apexams.promocodes.dto.PromoCodeValidationResponse;
import org.example.apexams.promocodes.entity.PromoCodeEntity;
import org.example.apexams.promocodes.repo.PromoCodeRepository;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.tariffs.repo.TariffRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class PromoCodeServiceImpl implements PromoCodeService {
    private final PromoCodeRepository promoCodeRepository;
    private final TariffRepository tariffRepository;

    @Override
    @Transactional(readOnly = true)
    public PromoCodeValidationResponse validateAndApply(PromoCodeValidationRequest request) {
        PromoCodeEntity promoCode = promoCodeRepository.findByCodeIgnoreCase(request.code())
                .orElse(null);

        TariffEntity tariff = tariffRepository.findById(request.tariffId())
                .orElseThrow(() -> new IllegalArgumentException("Tariff not found"));

        if (promoCode == null) {
            return PromoCodeValidationResponse.builder()
                    .valid(false)
                    .message("Promo code not found")
                    .build();
        }

        if (!promoCode.isValid()) {
            return PromoCodeValidationResponse.builder()
                    .valid(false)
                    .message("Promo code is not valid or expired")
                    .build();
        }

        if (!promoCode.isApplicableToTariff(tariff)) {
            return PromoCodeValidationResponse.builder()
                    .valid(false)
                    .message("Promo code is not applicable to this tariff")
                    .build();
        }

        int originalPriceCents = tariff.getPriceCents();
        int finalPriceCents = MoneyUtils.applyDiscount(
                originalPriceCents,
                promoCode.getDiscountPercent()
        );
        int discountAmountCents = originalPriceCents - finalPriceCents;

        return PromoCodeValidationResponse.builder()
                .valid(true)
                .message("Promo code applied successfully")
                .discountPercent(promoCode.getDiscountPercent())
                .originalPrice(MoneyUtils.centsToDecimal(originalPriceCents))
                .discountAmount(MoneyUtils.centsToDecimal(discountAmountCents))
                .finalPrice(MoneyUtils.centsToDecimal(finalPriceCents))
                .build();
    }

    @Override
    @Transactional
    public void incrementUsage(String code) {
        promoCodeRepository.findByCodeIgnoreCase(code).ifPresent(promoCode -> {
            promoCode.setCurrentUses(promoCode.getCurrentUses() + 1);
            promoCodeRepository.save(promoCode);
            log.info("Incremented usage for promo code: {}", code);
        });
    }

    @Override
    @Transactional
    public PromoCodeEntity createPromoCode(PromoCodeEntity promoCode) {
        if (promoCodeRepository.existsByCodeIgnoreCase(promoCode.getCode())) {
            throw new IllegalArgumentException("Promo code already exists");
        }

        return promoCodeRepository.save(promoCode);
    }

}