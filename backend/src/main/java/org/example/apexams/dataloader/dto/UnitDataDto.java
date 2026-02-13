package org.example.apexams.dataloader.dto;

import lombok.Data;

@Data
public class UnitDataDto {
    private Integer order;
    private String title;
    private String snippet;
    private String description;
    private String iconUrl;
    private Boolean isPublished;
}
