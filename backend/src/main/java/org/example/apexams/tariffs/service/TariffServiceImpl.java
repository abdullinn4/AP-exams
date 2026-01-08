package org.example.apexams.tariffs.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.mapper.TariffMapper;
import org.example.apexams.courses.repo.CourseRepository;
import org.example.apexams.tariffs.dto.CreateTariffRequest;
import org.example.apexams.tariffs.dto.TariffResponse;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.tariffs.entity.enums.TariffTier;
import org.example.apexams.tariffs.repo.TariffRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class TariffServiceImpl implements TariffService{
    private final TariffRepository tariffRepository;
    private final TariffMapper tariffMapper;
    private final CourseRepository courseRepository;


    @Override
    @Transactional
    public TariffEntity createTariff(CreateTariffRequest dto) {
        var course = courseRepository.findById(dto.courseId())
                .orElseThrow(() -> new IllegalArgumentException("Course not found: " + dto.courseId()));

        if (tariffRepository.findByCourseIdAndTier(course.getId(), dto.tier()).isPresent()) {
            throw new IllegalArgumentException("A tariff for this course and level already exists: " + dto.tier());
        }

        TariffEntity entity = tariffMapper.toEntity(dto);
        entity.setCourse(course);

        tariffRepository.save(entity);
        log.info("Tariff successfully created: {} {}", course.getSlug(), entity.getTier());
        return entity;
    }

    @Override
    @Transactional(readOnly = true)
    public TariffResponse getTariff(UUID id) {
        var entity = tariffRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Tariff not found: " + id));
        return tariffMapper.toDto(entity);
    }

    @Override
    @Transactional(readOnly = true)
    public List<TariffResponse> getAllTariffs() {
        return tariffRepository.findAll().stream()
                .map(tariffMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<TariffResponse> getByCourseId(UUID courseId) {
        return tariffRepository.findByCourseId(courseId).stream()
                .map(tariffMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<TariffResponse> getActiveTariffsByCourse(UUID courseId) {
        return tariffRepository.findByCourseIdAndIsActiveTrue(courseId).stream()
                .map(tariffMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public TariffResponse getTariffByCourseAndTier(UUID courseId, TariffTier tier) {
        return tariffRepository.findByCourseIdAndTier(courseId, tier)
                .map(tariffMapper::toDto)
                .orElseThrow(() -> new IllegalArgumentException("Tariff not found for course: " + courseId + " and tier: " + tier));
    }

    @Override
    @Transactional
    public void updateTariff(UUID id, CreateTariffRequest dto) {
        TariffEntity tariff = findTariffByIdOrThrow(id);

        // Обновляем только не-null поля
        if (dto.title() != null) {
            tariff.setTitle(dto.title());
        }

        if (dto.priceCents() != null) {
            tariff.setPriceCents(dto.priceCents());
        }

        tariffRepository.save(tariff);
        log.info("Tariff updated successfully: {}", id);
    }

    @Override
    @Transactional
    public void activateTariff(UUID id) {
        TariffEntity tariffEntity = findTariffByIdOrThrow(id);
        
        if (tariffEntity.getIsActive()) {
            log.warn("Tariff is already active: {}", id);
            return;
        }
        
        tariffEntity.setIsActive(true);
        tariffRepository.save(tariffEntity);
        log.info("Tariff successfully activated: {}", id);
    }

    @Override
    @Transactional
    public void deactivateTariff(UUID id) {
        TariffEntity tariffEntity = findTariffByIdOrThrow(id);
        
        if (!tariffEntity.getIsActive()) {
            log.warn("Tariff is already inactive: {}", id);
            return;
        }
        
        tariffEntity.setIsActive(false);
        tariffRepository.save(tariffEntity);
        log.info("Tariff successfully deactivated: {}", id);
    }

    @Override
    @Transactional
    public void deleteTariff(UUID id) {
        TariffEntity tariffEntity = findTariffByIdOrThrow(id);
        tariffRepository.delete(tariffEntity);
        log.info("Tariff successfully deleted");
    }

    @Override
    @Transactional(readOnly = true)
    public boolean existsTariffForCourse(UUID courseId, TariffTier tier) {
        return tariffRepository.existsByCourseIdAndTier(courseId, tier);
    }

    private TariffEntity findTariffByIdOrThrow(UUID id) {
        return tariffRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Tariff not found: " + id));
    }
}
