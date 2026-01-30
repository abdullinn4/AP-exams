package org.example.apexams.common.mapper;

import org.example.apexams.courses.dto.CourseResponse;
import org.example.apexams.courses.dto.CourseWithUnitsResponse;
import org.example.apexams.courses.dto.CreateCourseRequest;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.units.dto.UnitResponse;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CourseMapper {
    public CourseResponse toDto(CourseEntity courseEntity) {
        return new CourseResponse(
                courseEntity.getId(),
                courseEntity.getTitle(),
                courseEntity.getSlug(),
                courseEntity.getSnippet(),
                courseEntity.getDescription(),
                courseEntity.getPreviewVideoUrl(),
                courseEntity.getCoverUrl(),
                courseEntity.getStatus(),
                courseEntity.getDiscordInviteUrl(),
                courseEntity.getCreatedAt(),
                courseEntity.getUpdatedAt()
        );
    }

    public CourseWithUnitsResponse toDto (CourseEntity courseEntity, List<UnitResponse> units){
        return new CourseWithUnitsResponse(
                courseEntity.getId(),
                courseEntity.getTitle(),
                courseEntity.getSlug(),
                courseEntity.getSnippet(),
                courseEntity.getDescription(),
                courseEntity.getPreviewVideoUrl(),
                courseEntity.getCoverUrl(),
                courseEntity.getStatus(),
                courseEntity.getDiscordInviteUrl(),
                courseEntity.getCreatedAt(),
                courseEntity.getUpdatedAt(),
                units
        );
    }

    public CourseEntity toEntity(CreateCourseRequest dto) {
        return CourseEntity.builder()
                .title(dto.title())
                .slug(dto.slug())
                .description(dto.description())
                .snippet(dto.snippet())
                .previewVideoUrl(dto.previewVideoUrl())
                .coverUrl(dto.coverUrl())
                .discordInviteUrl(dto.discordInviteUrl())
                .build();
    }
}
