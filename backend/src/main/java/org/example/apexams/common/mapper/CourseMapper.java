package org.example.apexams.common.mapper;

import org.example.apexams.courses.dto.CourseResponse;
import org.example.apexams.courses.dto.CreateCourseRequest;
import org.example.apexams.courses.entity.CourseEntity;
import org.springframework.stereotype.Component;

@Component
public class CourseMapper {
    public CourseResponse toDto(CourseEntity courseEntity) {
        return new CourseResponse(
                courseEntity.getId(),
                courseEntity.getTitle(),
                courseEntity.getSlug(),
                courseEntity.getDescription(),
                courseEntity.getPreviewVideoUrl(),
                courseEntity.getCoverUrl(),
                courseEntity.getStatus(),
                courseEntity.getDiscordInviteUrl(),
                courseEntity.getCreatedAt(),
                courseEntity.getUpdatedAt()
        );
    }

    public CourseEntity toEntity(CreateCourseRequest dto) {
        return CourseEntity.builder()
                .title(dto.title())
                .slug(dto.slug())
                .description(dto.description())
                .previewVideoUrl(dto.previewVideoUrl())
                .coverUrl(dto.coverUrl())
                .discordInviteUrl(dto.discordInviteUrl())
                .build();
    }
}
