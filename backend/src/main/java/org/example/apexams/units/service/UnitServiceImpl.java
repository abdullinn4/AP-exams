package org.example.apexams.units.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.mapper.UnitMapper;
import org.example.apexams.enrollments.service.EnrollmentService;
import org.example.apexams.lessonProgress.entity.enums.LessonProgressStatus;
import org.example.apexams.lessons.dto.LessonWithProgressResponse;
import org.example.apexams.lessons.repo.LessonRepository;
import org.example.apexams.lessons.service.LessonService;
import org.example.apexams.units.dto.UnitResponse;
import org.example.apexams.units.dto.UnitWithLessonsResponse;
import org.example.apexams.units.entity.UnitEntity;
import org.example.apexams.units.repo.UnitRepository;
import org.example.apexams.users.dto.UserResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class UnitServiceImpl implements UnitService {
    private final UnitRepository unitRepository;
    private final UnitMapper unitMapper;
    private final LessonService lessonService;
    private final EnrollmentService enrollmentService;
    private final LessonRepository lessonRepository;

    @Override
    @Transactional(readOnly = true)
    public UnitResponse getUnit(UUID unitId) {
        UnitEntity unit = findUnitByIdOrThrow(unitId);
        return unitMapper.toDto(unit);
    }

    @Override
    @Transactional(readOnly = true)
    public UnitWithLessonsResponse getUnitWithLessons(UUID unitId, UUID userId) {
        UnitEntity unit = findUnitByIdOrThrow(unitId);
        UUID courseId = unit.getCourse().getId();

        // Проверка доступа к курсу
        if (!enrollmentService.hasAccess(userId, courseId)) {
            throw new IllegalStateException("User does not have access to this course");
        }

        // Получаем уроки с прогрессом
        List<LessonWithProgressResponse> lessons = lessonService.getLessonsWithProgressList(unitId, userId);

        int totalLessons = lessons.size();
        int completedLessons = (int) lessons.stream()
                .filter(l -> l.progressStatus() == LessonProgressStatus.COMPLETED)
                .count();
        double progressPercentage = totalLessons > 0
                ? Math.round((completedLessons * 100.0 / totalLessons) * 100.0) / 100.0
                : 0.0;

        // Рассчитываем прогресс
        return new UnitWithLessonsResponse(
                unit.getId(),
                unit.getCourse().getId(),
                unit.getTitle(),
                unit.getSnippet(),
                unit.getDescription(),
                unit.getIconUrl(),
                unit.getOrderIndex(),
                unit.getIsPublished(),
                unit.getCreatedAt(),
                unit.getUpdatedAt(),
                lessons,
                totalLessons,
                completedLessons,
                progressPercentage

        );
    }

    @Override
    @Transactional(readOnly = true)
    public List<UnitResponse> getActiveUnitsByCourse(UUID courseId) {
        List<UnitEntity> units = unitRepository.findByCourseIdAndIsPublishedTrueOrderByOrderIndex(courseId);

        List<UUID> unitIds = units.stream().map(UnitEntity::getId).toList();
        Map<UUID, Long> unitLessonsCount = lessonRepository.findByUnitIdIn(unitIds)
                .stream()
                .collect(Collectors.groupingBy(
                        lesson -> lesson.getUnit().getId(),
                        Collectors.counting()
                ));

        return units.stream()
                .map(unit -> {
                    UnitResponse dto = unitMapper.toDto(unit);
                    int lessonsCount = unitLessonsCount.getOrDefault(unit.getId(), 0L).intValue();

                    return new UnitResponse(
                            dto.id(),
                            dto.courseId(),
                            dto.title(),
                            dto.snippet(),
                            dto.description(),
                            dto.iconUrl(),
                            dto.orderIndex(),
                            dto.isPublished(),
                            lessonsCount,  // Реальное количество
                            dto.createdAt(),
                            dto.updatedAt()
                    );
                })
                .toList();

    }

    private UnitEntity findUnitByIdOrThrow(UUID unitId) {
        return unitRepository.findById(unitId)
                .orElseThrow(() -> new IllegalArgumentException("Unit not found: " + unitId));
    }
}
