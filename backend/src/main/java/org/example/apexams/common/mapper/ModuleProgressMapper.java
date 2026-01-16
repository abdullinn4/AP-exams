package org.example.apexams.common.mapper;

import org.example.apexams.moduleProgress.dto.ModuleProgressResponse;
import org.example.apexams.moduleProgress.entity.ModuleProgressEntity;
import org.springframework.stereotype.Component;

@Component
public class ModuleProgressMapper {

    public ModuleProgressResponse toDto(ModuleProgressEntity entity) {
        return new ModuleProgressResponse(
                entity.getId(),
                entity.getModule().getId(),
                entity.getStatus(),
                entity.getCompletedAt()
        );
    }
}

