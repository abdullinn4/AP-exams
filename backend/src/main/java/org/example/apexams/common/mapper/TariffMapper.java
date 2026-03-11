package org.example.apexams.common.mapper;

import org.example.apexams.tariffs.dto.CreateTariffRequest;
import org.example.apexams.tariffs.dto.TariffResponse;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.springframework.stereotype.Component;

import static org.example.apexams.common.util.MoneyUtils.centsToDecimal;

@Component
public class TariffMapper {

    public TariffEntity toEntity(CreateTariffRequest dto) {
        return TariffEntity.builder()
                .title(dto.title())
                .tier(dto.tier())
                .priceCents(dto.priceCents())
                .payProVariantId(dto.payProVariantId())
                .build();
    }

    public TariffResponse toDto(TariffEntity entity) {
        return new TariffResponse(
                entity.getId(),
                entity.getCourse().getId(),
                entity.getTitle(),
                entity.getTier(),
                entity.getPayProVariantId(),
                centsToDecimal(entity.getPriceCents()),
                entity.getCurrency(),
                entity.getIsActive()
        );
    }
}
