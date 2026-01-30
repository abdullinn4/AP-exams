package org.example.apexams.common.mapper;

import org.example.apexams.lessons.dto.CreateLessonRequest;
import org.example.apexams.lessons.dto.LessonResponse;
import org.example.apexams.lessons.entity.LessonEntity;
import org.springframework.stereotype.Component;

@Component
public class LessonMapper {
    public LessonEntity toEntity(CreateLessonRequest dto) {
        return LessonEntity.builder()
                .title(dto.title())
                .orderIndex(dto.orderIndex())
                .releaseAt(dto.releaseAt())
                .build();
    }

    public LessonResponse toDto(LessonEntity entity) {
        return new LessonResponse(
                entity.getId(),
                entity.getUnit().getId(),
                entity.getTitle(),
                entity.getOrderIndex(),
                entity.getReleaseAt()
        );
    }
}
