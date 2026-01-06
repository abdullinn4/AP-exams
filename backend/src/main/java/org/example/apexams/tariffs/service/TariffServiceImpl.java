package org.example.apexams.tariffs.service;

import lombok.RequiredArgsConstructor;
import org.example.apexams.common.mapper.TariffMapper;
import org.example.apexams.courses.repo.CourseRepository;
import org.example.apexams.tariffs.dto.CreateTariffRequest;
import org.example.apexams.tariffs.dto.TariffResponse;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.tariffs.repo.TariffRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TariffServiceImpl implements TariffService{
    private final TariffRepository tariffRepository;
    private final TariffMapper tariffMapper;
    private final CourseRepository courseRepository;

    private static final Logger logger = LoggerFactory.getLogger(TariffServiceImpl.class);
    @Override
    public TariffEntity createTariff(CreateTariffRequest dto) {
        try{
            var course = courseRepository.findById(dto.courseId())
                    .orElseThrow(() -> new IllegalArgumentException("Курс не найден: " + dto.courseId()));

            if (tariffRepository.findByCourseIdAndTier(course.getId(), dto.tier()).isPresent()) {
                throw new IllegalArgumentException("Тариф для этого курса и уровня уже существует: " + dto.tier());
            }

            TariffEntity entity = tariffMapper.toEntity(dto);
            entity.setCourse(course);

            tariffRepository.save(entity);
            logger.info("Тариф успешно создан: {} {}", course.getSlug(), entity.getTier());
            return entity;

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public TariffResponse getTariff(UUID id) {
        var entity = tariffRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Тариф не найден: " + id));
        return tariffMapper.toDto(entity);
    }

    @Override
    public List<TariffResponse> getAllTariffs() {
        return tariffRepository.findAll().stream()
                .map(tariffMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<TariffResponse> getByCourseId(UUID courseId) {
        return tariffRepository.findByCourseId(courseId).stream()
                .map(tariffMapper::toDto)
                .collect(Collectors.toList());
    }
}
