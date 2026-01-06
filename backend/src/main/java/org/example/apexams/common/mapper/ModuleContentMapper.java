package org.example.apexams.common.mapper;

import org.example.apexams.module.dto.ModuleContentRequest;
import org.example.apexams.module.dto.ModuleContentResponse;
import org.example.apexams.module.entity.ModuleContentEntity;
import org.springframework.stereotype.Component;

@Component
public class ModuleContentMapper {
    public ModuleContentEntity toEntity(ModuleContentRequest dto) {
        return ModuleContentEntity.builder()
                .videoPayload(dto.videoPayload())
                .textPayload(dto.textPayload())
                .build();
    }

    public ModuleContentResponse toDto(ModuleContentEntity entity) {
        return new ModuleContentResponse(
                entity.getModuleId(),
                entity.getVideoPayload(),
                entity.getTextPayload()
        );
    }
}
