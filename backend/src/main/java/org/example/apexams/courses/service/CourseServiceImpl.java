package org.example.apexams.courses.service;

import lombok.RequiredArgsConstructor;
import org.example.apexams.common.mapper.CourseMapper;
import org.example.apexams.courses.dto.CourseResponse;
import org.example.apexams.courses.dto.CreateCourseRequest;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.courses.repo.CourseRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService{
    private final CourseRepository courseRepository;
    private final CourseMapper courseMapper;

    private static final Logger logger = LoggerFactory.getLogger(CourseServiceImpl.class);

    @Override
    public CourseEntity createCourse(CreateCourseRequest dto) {
        try{
            if (courseRepository.existsBySlug(dto.slug())) {
                throw new IllegalArgumentException("Курс с таким slug уже существует: " + dto.slug());
            }

            CourseEntity courseEntity = courseMapper.toEntity(dto);

            courseRepository.save(courseEntity);
            logger.info("Курс успешно создан: {}", courseEntity.getSlug());
            return courseEntity;
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }

    @Override
    public CourseResponse getCourse(UUID id) {
        CourseEntity courseEntity = courseRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Курс не найден: " + id));

        return courseMapper.toDto(courseEntity);
    }

    @Override
    public List<CourseResponse> getAllCourses() {
        List<CourseEntity> courseEntities = courseRepository.findAll();
        return courseEntities.stream()
                .map(courseMapper::toDto)
                .collect(Collectors.toList());
    }
}
