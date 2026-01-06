package org.example.apexams.module.service;

import org.example.apexams.module.dto.CreateModuleRequest;
import org.example.apexams.module.dto.ModuleResponse;
import org.example.apexams.module.entity.ModuleEntity;

import java.util.List;
import java.util.UUID;

public interface ModuleService {
    ModuleEntity createModule(CreateModuleRequest dto);
    ModuleResponse getModule(UUID id);
    List<ModuleResponse> getModulesByCourse(UUID courseId);
}
