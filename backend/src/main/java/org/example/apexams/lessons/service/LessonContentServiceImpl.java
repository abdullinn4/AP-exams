package org.example.apexams.lessons.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.mapper.LessonContentMapper;
import org.example.apexams.enrollments.service.EnrollmentService;
import org.example.apexams.lessons.dto.LessonContentRequest;
import org.example.apexams.lessons.dto.LessonContentResponse;
import org.example.apexams.lessons.entity.LessonContentEntity;
import org.example.apexams.lessons.entity.LessonEntity;
import org.example.apexams.lessons.repo.LessonContentRepository;
import org.example.apexams.lessons.repo.LessonRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class LessonContentServiceImpl implements LessonContentService {
    private final LessonContentRepository contentRepository;
    private final LessonRepository lessonRepository;
    private final LessonContentMapper mapper;
    private final EnrollmentService enrollmentService;


    @Override
    @Transactional
    public LessonContentResponse upsert(LessonContentRequest dto) {
        var lesson = lessonRepository.findById(dto.lessonId())
                .orElseThrow(() -> new IllegalArgumentException("Lesson not found"));

        LessonContentEntity content = contentRepository.findById(dto.lessonId())
                .orElseGet(() -> {
                    var c = mapper.toEntity(dto);
                    c.setLesson(lesson);
                    c.setLessonId(lesson.getId());
                    return c;
                });

        content.setVideoPayload(dto.videoPayload());
        content.setTextPayload(dto.textPayload());

        log.info("Content successfully loaded for lesson: {}", lesson.getTitle());

        return mapper.toDto(contentRepository.save(content));

    }

    @Override
    @Transactional(readOnly = true)
    public LessonContentResponse getByLessonId(UUID lessonId) {
        return contentRepository.findById(lessonId)
                .map(mapper::toDto)
                .orElseThrow(() -> new IllegalArgumentException("Content not found"));
    }

    @Override
    @Transactional(readOnly = true)
    public LessonContentResponse getByLessonIdWithAccess(UUID lessonId, UUID userId) {
        LessonEntity lesson = lessonRepository.findById(lessonId)
                .orElseThrow(() -> new IllegalArgumentException("Lesson not found"));

        UUID courseId = lesson.getUnit().getCourse().getId();
        
        // Проверка доступа к курсу
        if (!enrollmentService.hasAccess(userId, courseId)) {
            throw new IllegalStateException("User does not have access to this course");
        }

        // Проверка доступности урока по дате
        if (lesson.getReleaseAt() != null && lesson.getReleaseAt().isAfter(Instant.now())) {
            throw new IllegalStateException("Lesson is not available yet");
        }

        return getByLessonId(lessonId);
    }

    @Override
    @Transactional
    public void delete(UUID lessonId) {
        contentRepository.deleteById(lessonId);
        log.info("Content successfully removed for lesson: {}", lessonId);
    }
}
