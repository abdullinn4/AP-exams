package org.example.apexams.common.mapper;

import org.example.apexams.lessonProgress.dto.LessonProgressResponse;
import org.example.apexams.lessonProgress.entity.LessonProgressEntity;
import org.springframework.stereotype.Component;

@Component
public class LessonProgressMapper {

    public LessonProgressResponse toDto(LessonProgressEntity entity) {
        return new LessonProgressResponse(
                entity.getId(),
                entity.getLesson().getId(),
                entity.getStatus(),
                entity.getCompletedAt()
        );
    }
}

