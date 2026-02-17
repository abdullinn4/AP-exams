package org.example.apexams.lessons.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.mapper.LessonMapper;
import org.example.apexams.enrollments.service.EnrollmentService;
import org.example.apexams.lessonProgress.dto.LessonProgressResponse;
import org.example.apexams.lessonProgress.entity.enums.LessonProgressStatus;
import org.example.apexams.lessonProgress.service.LessonProgressService;
import org.example.apexams.lessons.dto.*;
import org.example.apexams.lessons.entity.LessonEntity;
import org.example.apexams.lessons.repo.LessonRepository;
import org.example.apexams.tariffs.entity.enums.TariffTier;
import org.example.apexams.tests.dto.TestAttemptSummary;
import org.example.apexams.tests.dto.TestResponse;
import org.example.apexams.tests.entity.TestAttemptEntity;
import org.example.apexams.tests.entity.enums.TestAttemptStatus;
import org.example.apexams.tests.repo.TestAttemptRepository;
import org.example.apexams.tests.service.TestService;
import org.example.apexams.units.repo.UnitRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class LessonServiceImpl implements LessonService {
    private final LessonRepository lessonRepository;
    private final UnitRepository unitRepository;
    private final LessonMapper lessonMapper;
    private final EnrollmentService enrollmentService;
    private final LessonProgressService lessonProgressService;
    private final TestService testService;
    private final LessonContentService lessonContentService;
    private final TestAttemptRepository testAttemptRepository;


    @Override
    @Transactional
    public LessonEntity createLesson(CreateLessonRequest dto) {
        var unit = unitRepository.findById(dto.unitId())
                .orElseThrow(() -> new IllegalArgumentException("Unit not found: " + dto.unitId()));

        LessonEntity lesson = lessonMapper.toEntity(dto);
        lesson.setUnit(unit);

        lessonRepository.save(lesson);
        log.info("Lesson created successfully: {} (unit: {})", lesson.getTitle(), unit.getTitle());
        return lesson;
    }

    @Override
    @Transactional(readOnly = true)
    public LessonResponse getLesson(UUID id) {
        LessonEntity lesson = findLessonByIdOrThrow(id);
        return lessonMapper.toDto(lesson);
    }

    @Override
    @Transactional(readOnly = true)
    public List<LessonResponse> getLessonsByUnit(UUID unitId) {
        return lessonRepository.findByUnitIdOrderByOrderIndex(unitId).stream()
                .map(lessonMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public LessonDetailsResponse getLessonDetails(UUID lessonId, UUID userId) {
        LessonEntity lesson = findLessonByIdOrThrow(lessonId);
        UUID courseId = lesson.getUnit().getCourse().getId();

        if (!enrollmentService.hasAccess(userId, courseId)) {
            throw new IllegalStateException("User does not have access to this course");
        }

        if (!isLessonAvailable(lessonId, userId)) {
            throw new IllegalStateException("Lesson is not available yet");
        }
        LessonContentResponse content = lessonContentService.getByLessonId(lessonId);

        // Автоматически начать урок при первом просмотре
        LessonProgressResponse progress = lessonProgressService.getProgress(userId, lessonId);
        if (progress.status() == LessonProgressStatus.NOT_STARTED){
            progress = lessonProgressService.startLesson(userId, lessonId);
        }

        TestResponse test = testService.getTestByLesson(lessonId);

        TariffTier userTier = enrollmentService.getUserTier(userId, courseId)
                .orElse(TariffTier.BASIC);

        boolean canContactCurator = userTier == TariffTier.PRO;

        String discordInviteLink = canContactCurator ? lesson.getUnit().getCourse().getDiscordInviteUrl() : null;

        // Определяем статус попытки теста и собираем информацию о последней попытке
        TestAttemptStatus testAttemptStatus = null;
        UUID testAttemptId = null;
        TestAttemptSummary testAttemptSummary = null;

        if (test != null) {
            List<TestAttemptEntity> attempts = testAttemptRepository.findAllByUserIdAndTestId(userId, test.id());
            if (attempts.isEmpty()) {
                testAttemptStatus = TestAttemptStatus.NOT_STARTED;
            } else {
                TestAttemptEntity lastAttempt = attempts.getLast();
                testAttemptId = lastAttempt.getId();

                if (lastAttempt.getFinishedAt() == null) {
                    testAttemptStatus = TestAttemptStatus.IN_PROGRESS;
                } else {
                    testAttemptStatus = TestAttemptStatus.COMPLETED;

                    // Парсим resultJson для получения correctCount и totalCount
                    String resultJson = lastAttempt.getResultJson();
                    if (resultJson != null) {
                        try {
                            ObjectMapper mapper = new ObjectMapper();
                            JsonNode resultNode = mapper.readTree(resultJson);

                            Integer correctCount = resultNode.get("correctCount").asInt();
                            Integer totalCount = resultNode.get("totalCount").asInt();

                            testAttemptSummary = new TestAttemptSummary(
                                    correctCount,
                                    totalCount,
                                    lastAttempt.getScore(),
                                    lastAttempt.getFinishedAt()
                            );
                        } catch (Exception e) {
                            log.error("Failed to parse resultJson for attempt {}", lastAttempt.getId(), e);
                        }
                    }
                }
            }
        }
        return new LessonDetailsResponse(
                lesson.getId(),
                lesson.getUnit().getId(),
                lesson.getTitle(),
                lesson.getOrderIndex(),
                lesson.getReleaseAt(),

                content != null ? content.videoPayload() : null,
                content != null ? content.textPayload() : null,

                progress != null ? progress.status() : LessonProgressStatus.NOT_STARTED,
                progress != null ? progress.completedAt() : null,

                test != null ? test.id() : null,
                test != null ? test.title() : null,
                test != null ? test.timeLimitSec() : null,
                testAttemptStatus,
                testAttemptId,
                testAttemptSummary,

                canContactCurator,
                discordInviteLink
        );

    }

    @Transactional(readOnly = true)
    @Override
    public List<LessonWithProgressResponse> getLessonsWithProgressList(UUID unitId, UUID userId) {
        var unit = unitRepository.findById(unitId)
                .orElseThrow(() -> new IllegalArgumentException("Unit not found: " + unitId));
        UUID courseId = unit.getCourse().getId();

        if (!enrollmentService.hasAccess(userId, courseId)) {
            throw new IllegalStateException("User does not have access to this course");
        }
        List<LessonEntity> lessons = lessonRepository.findByUnitIdOrderByOrderIndex(unitId);

        Map<UUID, LessonProgressResponse> progressMap = lessonProgressService.getUserProgress(userId)
                .stream()
                .collect(Collectors.toMap(
                        LessonProgressResponse::lessonId,
                        p -> p
                ));

        return lessons.stream()
                .map(lesson -> {
                    LessonProgressResponse progress = progressMap.get(lesson.getId());

                    return new LessonWithProgressResponse(
                            lesson.getId(),
                            lesson.getUnit().getId(),
                            lesson.getTitle(),
                            lesson.getOrderIndex(),
                            lesson.getReleaseAt(),
                            progress != null ? progress.status() : LessonProgressStatus.NOT_STARTED,
                            progress != null ? progress.completedAt() : null
                    );
                })
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void updateLesson(UUID id, CreateLessonRequest dto) {
        LessonEntity lesson = findLessonByIdOrThrow(id);

        // Обновляем только не-null поля
        if (dto.title() != null) {
            lesson.setTitle(dto.title());
        }

        if (dto.orderIndex() != null) {
            lesson.setOrderIndex(dto.orderIndex());
        }

        if (dto.releaseAt() != null) {
            lesson.setReleaseAt(dto.releaseAt());
        }

        lessonRepository.save(lesson);
        log.info("Lesson updated successfully: {}", lesson.getTitle());
    }

    @Override
    @Transactional
    public void reorderLessons(UUID unitId, List<UUID> lessonIds) {
        // Проверяем что юнит существует
        if (!unitRepository.existsById(unitId)) {
            throw new IllegalArgumentException("Unit not found: " + unitId);
        }

        // Обновляем order_index для каждого урока
        for (int i = 0; i < lessonIds.size(); i++) {
            UUID lessonId = lessonIds.get(i);
            LessonEntity lesson = findLessonByIdOrThrow(lessonId);

            // Проверяем что урок принадлежит юниту
            if (!lesson.getUnit().getId().equals(unitId)) {
                throw new IllegalArgumentException("Lesson " + lessonId + " does not belong to unit " + unitId);
            }

            lesson.setOrderIndex(i);
            lessonRepository.save(lesson);
        }

        log.info("Lessons reordered successfully for unit: {}", unitId);
    }

    @Override
    @Transactional
    public void deleteLesson(UUID id) {
        LessonEntity lesson = findLessonByIdOrThrow(id);
        lessonRepository.delete(lesson);
        log.info("Lesson deleted successfully: {}", id);
    }

    @Override
    @Transactional(readOnly = true)
    public boolean isLessonAvailable(UUID lessonId, UUID userId) {
        LessonEntity lesson = findLessonByIdOrThrow(lessonId);
        UUID courseId = lesson.getUnit().getCourse().getId();

        // Проверка доступа к курсу
        if (!enrollmentService.hasAccess(userId, courseId)) {
            return false;
        }

        // Проверка release_at
        if (lesson.getReleaseAt() != null && Instant.now().isBefore(lesson.getReleaseAt())) {
            return false;
        }

        return true;
    }

    private LessonEntity findLessonByIdOrThrow(UUID id) {
        return lessonRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Lesson not found: " + id));
    }
}
