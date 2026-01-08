package org.example.apexams.module.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.mapper.ModuleContentMapper;
import org.example.apexams.module.dto.ModuleContentRequest;
import org.example.apexams.module.dto.ModuleContentResponse;
import org.example.apexams.module.entity.ModuleContentEntity;
import org.example.apexams.module.repo.ModuleContentRepository;
import org.example.apexams.module.repo.ModuleRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class ModuleContentServiceImpl implements ModuleContentService {
    private final ModuleContentRepository contentRepository;
    private final ModuleRepository moduleRepository;
    private final ModuleContentMapper mapper;
    private final ModuleService moduleService;


    @Override
    @Transactional
    public ModuleContentResponse upsert(ModuleContentRequest dto) {
        var module = moduleRepository.findById(dto.moduleId())
                .orElseThrow(() -> new IllegalArgumentException("Module not found"));

        ModuleContentEntity content = contentRepository.findById(dto.moduleId())
                .orElseGet(() -> {
                    var c = mapper.toEntity(dto);
                    c.setModule(module);
                    c.setModuleId(module.getId());
                    return c;
                });

        content.setVideoPayload(dto.videoPayload());
        content.setTextPayload(dto.textPayload());

        log.info("Content successfully loaded for module: {}", module.getTitle());

        return mapper.toDto(contentRepository.save(content));

    }

    @Override
    @Transactional(readOnly = true)
    public ModuleContentResponse getByModuleId(UUID moduleId) {
        return contentRepository.findById(moduleId)
                .map(mapper::toDto)
                .orElseThrow(() -> new IllegalArgumentException("Content not found"));
    }

    @Override
    @Transactional(readOnly = true)
    public ModuleContentResponse getByModuleIdWithAccess(UUID moduleId, UUID userId) {
        // Проверка доступа через ModuleService
        if (!moduleService.isModuleAvailable(moduleId, userId)) {
            throw new IllegalStateException("User does not have access to this module");
        }

        return getByModuleId(moduleId);
    }

    @Override
    @Transactional
    public void delete(UUID moduleId) {
        contentRepository.deleteById(moduleId);
        log.info("Content successfully removed for module: {}", moduleId);
    }
}
