package org.example.apexams.common.mapper;

import org.example.apexams.units.dto.UnitResponse;
import org.example.apexams.units.entity.UnitEntity;
import org.springframework.stereotype.Component;

@Component
public class UnitMapper {

    public UnitResponse toDto(UnitEntity unit){
        return new UnitResponse(
                unit.getId(),
                unit.getCourse().getId(),
                unit.getTitle(),
                unit.getSnippet(),
                unit.getDescription(),
                unit.getIconUrl(),
                unit.getOrderIndex(),
                unit.getIsPublished(),
                0,
                unit.getCreatedAt(),
                unit.getUpdatedAt()
        );
    }
}
