package org.example.apexams.courses.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.mapper.CourseMapper;
import org.example.apexams.courses.dto.CourseResponse;
import org.example.apexams.courses.dto.CreateCourseRequest;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.courses.entity.enums.CourseStatus;
import org.example.apexams.courses.repo.CourseRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {
    private final CourseRepository courseRepository;
    private final CourseMapper courseMapper;

    @Override
    @Transactional
    public CourseEntity createCourse(CreateCourseRequest dto) {
        if (courseRepository.existsBySlug(dto.slug())) {
            throw new IllegalArgumentException("A course with this slug already exists: " + dto.slug());
        }

        CourseEntity courseEntity = courseMapper.toEntity(dto);

        courseRepository.save(courseEntity);
        log.info("Course created successfully: {}", courseEntity.getSlug());
        return courseEntity;
    }

    @Override
    @Transactional(readOnly = true)
    public CourseResponse getCourse(UUID id) {
        CourseEntity courseEntity = courseRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Course not found: " + id));

        return courseMapper.toDto(courseEntity);
    }

    @Override
    @Transactional(readOnly = true)
    public List<CourseResponse> getAllCourses() {
        List<CourseEntity> courseEntities = courseRepository.findAll();
        return courseEntities.stream()
                .map(courseMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public CourseResponse getCourseBySlug(String slug) {
        return courseMapper.toDto(findCourseBySlugOrThrow(slug));
    }

    @Override
    @Transactional
    public void updateCourse(UUID id, CreateCourseRequest dto) {
        CourseEntity course = findCourseByIdOrThrow(id);

        // Обновляем только не-null поля
        if (dto.title() != null) {
            course.setTitle(dto.title());
        }

        if (dto.slug() != null) {
            // Проверка уникальности slug если он изменился
            if (!course.getSlug().equals(dto.slug()) && courseRepository.existsBySlug(dto.slug())) {
                throw new IllegalArgumentException("A course with this slug already exists: " + dto.slug());
            }
            course.setSlug(dto.slug());
        }

        if (dto.description() != null) {
            course.setDescription(dto.description());
        }

        if (dto.previewVideoUrl() != null) {
            course.setPreviewVideoUrl(dto.previewVideoUrl());
        }

        if (dto.coverUrl() != null) {
            course.setCoverUrl(dto.coverUrl());
        }

        if (dto.discordInviteUrl() != null) {
            course.setDiscordInviteUrl(dto.discordInviteUrl());
        }

        courseRepository.save(course);
        log.info("Course updated successfully: {}", course.getSlug());
    }

    @Override
    @Transactional
    public void publishCourse(UUID id) {
        CourseEntity course = findCourseByIdOrThrow(id);

        if (course.getStatus() == CourseStatus.PUBLISHED) {
            log.warn("Course is already published: {}", id);
            return;
        }

        course.setStatus(CourseStatus.PUBLISHED);
        courseRepository.save(course);
        log.info("Course published successfully: {}", id);
    }

    @Override
    @Transactional
    public void unpublishCourse(UUID id) {
        CourseEntity course = findCourseByIdOrThrow(id);

        if (course.getStatus() != CourseStatus.PUBLISHED) {
            log.warn("Course is not published: {}", id);
            return;
        }

        course.setStatus(CourseStatus.DRAFT);
        courseRepository.save(course);
        log.info("Course unpublished successfully: {}", id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<CourseResponse> getPublishedCourses() {
        return courseRepository.findAllByStatus(CourseStatus.PUBLISHED)
                .stream()
                .map(courseMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void deleteCourse(UUID id) {
        CourseEntity course = findCourseByIdOrThrow(id);
        courseRepository.delete(course);
        log.info("Course marked as deleted: {}", id);
    }

    @Override
    public List<CourseResponse> getCoursesByIds(List<UUID> ids) {
        return courseRepository.findAllById(ids)
                .stream()
                .map(courseMapper::toDto)
                .collect(Collectors.toList());
    }

    private CourseEntity findCourseByIdOrThrow(UUID id) {
        return courseRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Course not found: " + id));
    }

    private CourseEntity findCourseBySlugOrThrow(String slug) {
        return courseRepository.findBySlug(slug)
                .orElseThrow(() -> new IllegalArgumentException("Course not found: " + slug));
    }
}
