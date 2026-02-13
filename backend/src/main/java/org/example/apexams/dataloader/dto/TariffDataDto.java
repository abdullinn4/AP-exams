package org.example.apexams.dataloader.dto;

import lombok.Data;

@Data
public class TariffDataDto {
    private String title;
    private String tier;
    private Integer priceCents;
    private String currency;
    private Boolean isActive;
    private String paddleVariantId;
}
