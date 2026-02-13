package org.example.apexams.dataloader.dto;

import lombok.Data;

@Data
public class LessonDataDto {
    private Integer unitOrder;
    private Integer lessonOrder;
    private String title;
    private String videoUrl;
    private String contentFile;
    private String releaseDate;
}
