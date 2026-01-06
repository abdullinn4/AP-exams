package org.example.apexams.module.service;

import org.example.apexams.module.dto.ModuleContentRequest;
import org.example.apexams.module.dto.ModuleContentResponse;

import java.util.UUID;

public interface ModuleContentService {
    ModuleContentResponse upsert(ModuleContentRequest dto);
    ModuleContentResponse getByModuleId(UUID moduleId);
}
