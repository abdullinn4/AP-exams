package org.example.apexams.dataloader.dto;

import lombok.Data;

@Data
public class CourseDataDto {
    private String slug;
    private String title;
    private String description;
    private String snippet;
    private String previewVideoUrl;
    private String coverUrl;
    private String discordInviteUrl;
    private String status;
    private String introVideoUrl;
    private String courseImageUrl;
}

