package org.example.apexams.courses.service;

import lombok.RequiredArgsConstructor;
import org.example.apexams.courses.dto.CourseWithProgressResponse;
import org.example.apexams.enrollments.entity.EnrollmentEntity;
import org.example.apexams.lessonProgress.dto.LessonProgressResponse;
import org.example.apexams.lessonProgress.entity.enums.LessonProgressStatus;
import org.example.apexams.lessonProgress.service.LessonProgressService;
import org.example.apexams.lessons.entity.LessonEntity;
import org.example.apexams.lessons.repo.LessonRepository;
import org.example.apexams.units.entity.UnitEntity;
import org.example.apexams.units.repo.UnitRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CourseProgressServiceImpl implements CourseProgressService {
    private final UnitRepository unitRepository;
    private final LessonRepository lessonRepository;
    private final LessonProgressService lessonProgressService;

    @Override
    @Transactional(readOnly = true)
    public List<CourseWithProgressResponse> calculateProgressForEnrollments(
            List<EnrollmentEntity> enrollments,
            UUID userId
    ) {
        if (enrollments.isEmpty()) {
            return Collections.emptyList();
        }

        // Получаем все courseIds
        List<UUID> courseIds = enrollments.stream()
                .map(e -> e.getCourse().getId())
                .distinct()
                .toList();

        // Batch загрузка всех units для всех курсов одним запросом
        Map<UUID, List<UnitEntity>> unitsByCourse = unitRepository.findByCourseIdIn(courseIds)
                .stream()
                .collect(Collectors.groupingBy(u -> u.getCourse().getId()));

        // Получаем все unitIds
        List<UUID> unitIds = unitsByCourse.values().stream()
                .flatMap(List::stream)
                .map(UnitEntity::getId)
                .toList();

        // Batch загрузка всех lessons одним запросом
        Map<UUID, List<LessonEntity>> lessonsByUnit = lessonRepository.findByUnitIds(unitIds)
                .stream()
                .collect(Collectors.groupingBy(l -> l.getUnit().getId()));

        // Получаем прогресс пользователя одним запросом
        Map<UUID, LessonProgressResponse> progressMap = lessonProgressService.getUserProgress(userId)
                .stream()
                .collect(Collectors.toMap(LessonProgressResponse::lessonId, p -> p, (p1, p2) -> p1));

        // Вычисляем прогресс для каждого курса
        return enrollments.stream()
                .map(enrollment -> {
                    UUID courseId = enrollment.getCourse().getId();

                    // Получаем все уроки курса из кэша
                    List<LessonEntity> allLessons = unitsByCourse.getOrDefault(courseId, Collections.emptyList())
                            .stream()
                            .flatMap(unit -> lessonsByUnit.getOrDefault(unit.getId(), Collections.emptyList()).stream())
                            .toList();

                    int totalLessons = allLessons.size();

                    // Считаем завершенные уроки
                    int completedLessons = (int) allLessons.stream()
                            .filter(lesson -> {
                                LessonProgressResponse progress = progressMap.get(lesson.getId());
                                return progress != null && progress.status() == LessonProgressStatus.COMPLETED;
                            })
                            .count();

                    double progressPercentage = totalLessons > 0
                            ? Math.round(completedLessons * 100.0 / totalLessons * 100.0) / 100.0
                            : 0.0;

                    // Находим последний просмотренный урок
                    LessonProgressResponse lastAccessed = findLastAccessedLesson(allLessons, progressMap);

                    UUID lastLessonId;
                    String lastLessonTitle = null;

                    if (lastAccessed != null) {
                        lastLessonId = lastAccessed.lessonId();
                        lastLessonTitle = allLessons.stream()
                                .filter(l -> l.getId().equals(lastLessonId))
                                .findFirst()
                                .map(LessonEntity::getTitle)
                                .orElse(null);
                    } else {
                        lastLessonId = null;
                    }

                    return new CourseWithProgressResponse(
                            enrollment.getCourse().getId(),
                            enrollment.getCourse().getTitle(),
                            enrollment.getCourse().getSlug(),
                            enrollment.getCourse().getCoverUrl(),
                            enrollment.getTier(),
                            totalLessons,
                            completedLessons,
                            progressPercentage,
                            lastLessonId,
                            lastLessonTitle
                    );
                })
                .collect(Collectors.toList());
    }

    @Override
    public LessonProgressResponse findLastAccessedLesson(
            List<LessonEntity> lessons,
            Map<UUID, LessonProgressResponse> progressMap
    ) {
        return lessons.stream()
                .map(lesson -> progressMap.get(lesson.getId()))
                .filter(Objects::nonNull)
                .filter(p -> p.completedAt() != null) // Только уроки с completedAt
                .max(Comparator.comparing(LessonProgressResponse::completedAt))
                .orElse(null);
    }
}