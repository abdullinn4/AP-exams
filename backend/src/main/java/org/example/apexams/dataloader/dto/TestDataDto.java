package org.example.apexams.dataloader.dto;

import lombok.Data;
import java.util.List;

@Data
public class TestDataDto {
    private Integer unitOrder;
    private Integer lessonOrder;
    private String type;
    private String title;
    private Integer timeLimitSec;
    private String minTier;
    private Boolean isPublished;
    private List<String> questionIds;
}
