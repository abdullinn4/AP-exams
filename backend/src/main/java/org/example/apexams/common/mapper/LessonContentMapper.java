package org.example.apexams.common.mapper;

import org.example.apexams.lessons.dto.LessonContentRequest;
import org.example.apexams.lessons.dto.LessonContentResponse;
import org.example.apexams.lessons.entity.LessonContentEntity;
import org.springframework.stereotype.Component;

@Component
public class LessonContentMapper {
    public LessonContentEntity toEntity(LessonContentRequest dto) {
        return LessonContentEntity.builder()
                .videoPayload(dto.videoPayload())
                .textPayload(dto.textPayload())
                .build();
    }

    public LessonContentResponse toDto(LessonContentEntity entity) {
        return new LessonContentResponse(
                entity.getLessonId(),
                entity.getVideoPayload(),
                entity.getTextPayload()
        );
    }
}
