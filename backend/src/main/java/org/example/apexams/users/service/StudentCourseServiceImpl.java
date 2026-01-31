package org.example.apexams.users.service;

import lombok.RequiredArgsConstructor;
import org.example.apexams.courses.dto.CourseDetailsResponse;
import org.example.apexams.courses.dto.CourseResponse;
import org.example.apexams.courses.dto.CourseWithProgressResponse;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.courses.service.CourseProgressService;
import org.example.apexams.courses.service.CourseService;
import org.example.apexams.enrollments.dto.EnrollmentResponse;
import org.example.apexams.enrollments.entity.EnrollmentEntity;
import org.example.apexams.enrollments.entity.enums.EnrollmentStatus;
import org.example.apexams.enrollments.repo.EnrollmentRepository;
import org.example.apexams.enrollments.service.EnrollmentService;
import org.example.apexams.lessonProgress.dto.LessonProgressResponse;
import org.example.apexams.lessonProgress.entity.enums.LessonProgressStatus;
import org.example.apexams.lessonProgress.service.LessonProgressService;
import org.example.apexams.lessons.dto.LessonWithProgressResponse;
import org.example.apexams.lessons.entity.LessonEntity;
import org.example.apexams.lessons.repo.LessonRepository;
import org.example.apexams.units.dto.UnitWithLessonsResponse;
import org.example.apexams.units.entity.UnitEntity;
import org.example.apexams.units.repo.UnitRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudentCourseServiceImpl implements StudentCourseService {
    private final EnrollmentService enrollmentService;
    private final CourseService courseService;
    private final EnrollmentRepository enrollmentRepository;
    private final LessonRepository lessonRepository;
    private final LessonProgressService lessonProgressService;
    private final UnitRepository unitRepository;
    private final CourseProgressService courseProgressService;

    @Override
    @Transactional(readOnly = true)
    public List<CourseWithProgressResponse> getCoursesByUser(UUID userId) {
        List<EnrollmentEntity> enrollments = enrollmentRepository.findAllByUserId(userId)
                .stream()
                .filter(e -> e.getStatus() == EnrollmentStatus.ACTIVE)
                .toList();

        return courseProgressService.calculateProgressForEnrollments(enrollments, userId);
    }

    @Override
    public CourseResponse getCourseById(UUID userId, UUID courseId) {
        EnrollmentResponse enrollmentResponse = enrollmentService.getEnrollment(userId, courseId)
                .orElseThrow(() -> new RuntimeException("Enrollment not found"));
        return courseService.getCourse(enrollmentResponse.courseId());
    }

    @Override
    @Transactional(readOnly = true)
    public List<CourseWithProgressResponse> getCoursesWithProgress(UUID userId) {
        List<EnrollmentEntity> enrollments = enrollmentRepository.findAllByUserId(userId)
                .stream()
                .filter(e -> e.getStatus() == EnrollmentStatus.ACTIVE)
                .toList();

        return courseProgressService.calculateProgressForEnrollments(enrollments, userId);
    }

    @Override
    @Transactional(readOnly = true)
    public CourseDetailsResponse getCourseWithUnits(UUID userId, UUID courseId) {
        // Проверка доступа
        if (!enrollmentService.hasAccess(userId, courseId)) {
            throw new IllegalStateException("User does not have access to this course");
        }

        CourseResponse course = courseService.getCourse(courseId);

        // Получаем все units курса
        List<UnitEntity> units = unitRepository.findByCourseIdOrderByOrderIndex(courseId);

        if (units.isEmpty()) {
            return createEmptyCourseDetails(course);
        }

        // Получаем все unitIds
        List<UUID> unitIds = units.stream().map(UnitEntity::getId).toList();

        // Batch загрузка всех lessons одним запросом
        Map<UUID, List<LessonEntity>> lessonsByUnit = lessonRepository.findByUnitIds(unitIds)
                .stream()
                .collect(Collectors.groupingBy(l -> l.getUnit().getId()));

        // Получаем прогресс пользователя одним запросом
        Map<UUID, LessonProgressResponse> progressMap = lessonProgressService.getUserProgress(userId)
                .stream()
                .collect(Collectors.toMap(LessonProgressResponse::lessonId, p -> p, (p1, p2) -> p1));

        // Формируем units с прогрессом
        List<UnitWithLessonsResponse> unitsWithProgress = units.stream()
                .map(unit -> buildUnitWithProgress(unit, lessonsByUnit, progressMap))
                .toList();

        return new CourseDetailsResponse(
                course.id(),
                course.title(),
                course.slug(),
                course.description(),
                course.snippet(),
                course.previewVideoUrl(),
                course.coverUrl(),
                course.status(),
                course.discordInviteUrl(),
                unitsWithProgress
        );
    }

    private UnitWithLessonsResponse buildUnitWithProgress(
            UnitEntity unit,
            Map<UUID, List<LessonEntity>> lessonsByUnit,
            Map<UUID, LessonProgressResponse> progressMap
    ) {
        // Получаем уроки unit из кэша
        List<LessonEntity> lessons = lessonsByUnit.getOrDefault(unit.getId(), Collections.emptyList());

        // Формируем уроки с прогрессом
        List<LessonWithProgressResponse> lessonsWithProgress = lessons.stream()
                .map(lesson -> buildLessonWithProgress(lesson, progressMap))
                .toList();

        // Считаем прогресс unit
        int totalLessons = lessonsWithProgress.size();
        int completedLessons = (int) lessonsWithProgress.stream()
                .filter(l -> l.progressStatus() == LessonProgressStatus.COMPLETED)
                .count();
        double progressPercentage = totalLessons > 0
                ? Math.round(completedLessons * 100.0 / totalLessons * 100.0) / 100.0
                : 0.0;

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
                lessonsWithProgress,
                totalLessons,
                completedLessons,
                progressPercentage
        );
    }

    private LessonWithProgressResponse buildLessonWithProgress(
            LessonEntity lesson,
            Map<UUID, LessonProgressResponse> progressMap
    ) {
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
    }

    private CourseDetailsResponse createEmptyCourseDetails(CourseResponse course) {
        return new CourseDetailsResponse(
                course.id(),
                course.title(),
                course.slug(),
                course.description(),
                course.snippet(),
                course.previewVideoUrl(),
                course.coverUrl(),
                course.status(),
                course.discordInviteUrl(),
                Collections.emptyList()
        );
    }
}