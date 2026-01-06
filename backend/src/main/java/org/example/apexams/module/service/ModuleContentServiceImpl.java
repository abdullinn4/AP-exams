package org.example.apexams.module.service;

import lombok.RequiredArgsConstructor;
import org.example.apexams.common.mapper.ModuleContentMapper;
import org.example.apexams.module.dto.ModuleContentRequest;
import org.example.apexams.module.dto.ModuleContentResponse;
import org.example.apexams.module.entity.ModuleContentEntity;
import org.example.apexams.module.repo.ModuleContentRepository;
import org.example.apexams.module.repo.ModuleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ModuleContentServiceImpl implements ModuleContentService{
    private final ModuleContentRepository contentRepository;
    private final ModuleRepository moduleRepository;
    private final ModuleContentMapper mapper;

    private static final Logger logger = LoggerFactory.getLogger(ModuleContentServiceImpl.class);


    @Override
    public ModuleContentResponse upsert(ModuleContentRequest dto) {
        try{
            var module = moduleRepository.findById(dto.moduleId())
                    .orElseThrow(() -> new IllegalArgumentException("Модуль не найден"));

            ModuleContentEntity content = contentRepository.findById(dto.moduleId())
                    .orElseGet(() -> {
                        var c = mapper.toEntity(dto);
                        c.setModule(module);
                        c.setModuleId(module.getId());
                        return c;
                    });

            content.setVideoPayload(dto.videoPayload());
            content.setTextPayload(dto.textPayload());

            logger.info("Контент успешно загружен для модуля: {}", module.getTitle());

            return mapper.toDto(contentRepository.save(content));

        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    @Override
    public ModuleContentResponse getByModuleId(UUID moduleId) {
        return contentRepository.findById(moduleId)
                .map(mapper::toDto)
                .orElseThrow(() -> new IllegalArgumentException("Контент не найден"));
    }
}
