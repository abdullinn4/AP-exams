package org.example.apexams.common.mapper;

import org.example.apexams.module.dto.CreateModuleRequest;
import org.example.apexams.module.dto.ModuleResponse;
import org.example.apexams.module.entity.ModuleEntity;
import org.springframework.stereotype.Component;

@Component
public class ModuleMapper {
    public ModuleEntity toEntity(CreateModuleRequest dto) {
        return ModuleEntity.builder()
                .title(dto.title())
                .orderIndex(dto.orderIndex())
                .releaseAt(dto.releaseAt())
                .build();
    }

    public ModuleResponse toDto(ModuleEntity entity) {
        return new ModuleResponse(
                entity.getId(),
                entity.getCourse().getId(),
                entity.getTitle(),
                entity.getOrderIndex(),
                entity.getReleaseAt()
        );
    }
}
