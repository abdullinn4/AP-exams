package org.example.apexams.units.service;

import org.example.apexams.units.dto.UnitResponse;
import org.example.apexams.units.dto.UnitWithLessonsResponse;

import java.util.List;
import java.util.UUID;

public interface UnitService {
    UnitResponse getUnit(UUID unitId);
    
    UnitWithLessonsResponse getUnitWithLessons(UUID unitId, UUID userId);
    
    List<UnitResponse> getActiveUnitsByCourse(UUID courseId);
}
