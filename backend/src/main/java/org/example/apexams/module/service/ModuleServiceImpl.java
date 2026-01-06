package org.example.apexams.module.service;

import lombok.RequiredArgsConstructor;
import org.example.apexams.common.mapper.ModuleMapper;
import org.example.apexams.courses.repo.CourseRepository;
import org.example.apexams.module.dto.CreateModuleRequest;
import org.example.apexams.module.dto.ModuleResponse;
import org.example.apexams.module.entity.ModuleEntity;
import org.example.apexams.module.repo.ModuleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ModuleServiceImpl implements ModuleService {
    private final ModuleRepository moduleRepository;
    private final CourseRepository courseRepository;
    private final ModuleMapper moduleMapper;

    private static final Logger logger = LoggerFactory.getLogger(ModuleServiceImpl.class);

    @Override
    public ModuleEntity createModule(CreateModuleRequest dto) {
        try{
            var course = courseRepository.findById(dto.courseId())
                    .orElseThrow(() -> new IllegalArgumentException("Курс не найден: " + dto.courseId()));

            ModuleEntity module = moduleMapper.toEntity(dto);
            module.setCourse(course);

            moduleRepository.save(module);
            logger.info("Модуль успешно создан: {} (курс: {})", module.getTitle(), course.getSlug());
            return module;

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public ModuleResponse getModule(UUID id) {
        var module = moduleRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Модуль не найден: " + id));
        return moduleMapper.toDto(module);
    }

    @Override
    public List<ModuleResponse> getModulesByCourse(UUID courseId) {
        return moduleRepository.findByCourseIdOrderByOrderIndex(courseId).stream()
                .map(moduleMapper::toDto)
                .collect(Collectors.toList());
    }
}
