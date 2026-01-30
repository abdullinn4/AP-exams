package org.example.apexams.users.service;

import lombok.RequiredArgsConstructor;
import org.example.apexams.courses.dto.CourseDetailsResponse;
import org.example.apexams.courses.dto.CourseResponse;
import org.example.apexams.courses.dto.CourseWithProgressResponse;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.courses.service.CourseService;
import org.example.apexams.enrollments.dto.EnrollmentResponse;
import org.example.apexams.enrollments.entity.EnrollmentEntity;
import org.example.apexams.enrollments.entity.enums.EnrollmentStatus;
import org.example.apexams.enrollments.repo.EnrollmentRepository;
import org.example.apexams.enrollments.service.EnrollmentService;
import org.example.apexams.lessonProgress.dto.LessonProgressResponse;
import org.example.apexams.lessonProgress.entity.LessonProgressEntity;
import org.example.apexams.lessonProgress.entity.enums.LessonProgressStatus;
import org.example.apexams.lessonProgress.repo.LessonProgressRepository;
import org.example.apexams.lessonProgress.service.LessonProgressService;
import org.example.apexams.lessons.dto.LessonWithProgressResponse;
import org.example.apexams.lessons.entity.LessonEntity;
import org.example.apexams.lessons.repo.LessonRepository;
import org.example.apexams.units.dto.UnitWithLessonsResponse;
import org.example.apexams.units.entity.UnitEntity;
import org.example.apexams.units.repo.UnitRepository;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudentCourseServiceImpl implements StudentCourseService {
    private final EnrollmentService enrollmentService;
    private final CourseService courseService;
    private final EnrollmentRepository enrollmentRepository;
    private final LessonRepository lessonRepository;
    private final LessonProgressRepository lessonProgressRepository;
    private final LessonProgressService lessonProgressService;
    private final UnitRepository unitRepository;

    @Override
    public List<CourseResponse> getCoursesByUser(UUID uuid) {
        List<EnrollmentResponse> enrollments = enrollmentService.getUserEnrollments(uuid);
        return courseService.getCoursesByIds(enrollments.stream()
                .filter(enrollment -> enrollment.status() == EnrollmentStatus.ACTIVE)
                .map(EnrollmentResponse::courseId)
                .collect(Collectors.toList()));
    }

    @Override
    public CourseResponse getCourseById(UUID uuid, UUID courseId) {
        EnrollmentResponse enrollmentResponse = enrollmentService.getEnrollment(uuid, courseId).orElseThrow(() -> new RuntimeException("Enrollment not found"));
        return courseService.getCourse(enrollmentResponse.courseId());
    }

    @Override
    public List<CourseWithProgressResponse> getCoursesWithProgress(UUID userId) {
        List<EnrollmentEntity> enrollments = enrollmentRepository.findAllByUserId(userId)
                .stream()
                .filter(e -> e.getStatus() == EnrollmentStatus.ACTIVE)
                .toList();

        return enrollments.stream()
                .map(enrollment -> {
                    CourseEntity course = enrollment.getCourse();

                    List<LessonEntity> allLessons = lessonRepository.findByUnitIdOrderByOrderIndex(course.getId());
                    int totalLessons = allLessons.size();

                    List<LessonProgressEntity> completedLessons = lessonProgressRepository.findAllByUserId(userId)
                            .stream()
                            .filter(p -> p.getStatus() == LessonProgressStatus.COMPLETED)
                            .filter(p -> allLessons.stream().anyMatch(m -> m.getId().equals(p.getLesson().getId())))
                            .toList();

                    int completed = completedLessons.size();
                    double progressPercentage = totalLessons > 0 ? (completed * 100.0 / totalLessons) : 0.0;

                    LessonProgressEntity lastAccessed = lessonProgressRepository.findAllByUserId(userId)
                            .stream()
                            .filter(p -> allLessons.stream().anyMatch(m -> m.getId().equals(p.getLesson().getId())))
                            .max(Comparator.comparing(LessonProgressEntity::getId))
                            .orElse(null);

                    return new CourseWithProgressResponse(
                            course.getId(),
                            course.getTitle(),
                            course.getSlug(),
                            course.getCoverUrl(),
                            enrollment.getTier(),
                            totalLessons,
                            completed,
                            progressPercentage,
                            lastAccessed != null ? lastAccessed.getLesson().getId() : null,
                            lastAccessed != null ? lastAccessed.getLesson().getTitle() : null
                    );
                })
                .collect(Collectors.toList());
    }

    @Override
    public CourseDetailsResponse getCourseWithUnits(UUID userId, UUID courseId) {
        // Проверка доступа
        if (!enrollmentService.hasAccess(userId, courseId)) {
            throw new IllegalStateException("User does not have access to this course");
        }

        CourseResponse course = courseService.getCourse(courseId);

        // Получаем все units курса
        List<UnitEntity> units = unitRepository.findByCourseIdOrderByOrderIndex(courseId);

        // Получаем прогресс пользователя по всем урокам
        Map<UUID, LessonProgressResponse> progressMap = lessonProgressService.getUserProgress(userId)
                .stream()
                .collect(Collectors.toMap(LessonProgressResponse::lessonId, p -> p));

        List<UnitWithLessonsResponse> unitsWithProgress = units.stream()
                .map(unit -> {
                    // Получаем уроки unit
                    List<LessonEntity> lessons = lessonRepository.findByUnitIdOrderByOrderIndex(unit.getId());

                    // Формируем уроки с прогрессом
                    List<LessonWithProgressResponse> lessonsWithProgress = lessons.stream()
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
                            .toList();

                    // Считаем прогресс unit
                    int totalLessons = lessonsWithProgress.size();
                    int completedLessons = (int) lessonsWithProgress.stream()
                            .filter(l -> l.progressStatus() == LessonProgressStatus.COMPLETED)
                            .count();
                    double progressPercentage = totalLessons > 0 ? (completedLessons * 100.0 / totalLessons) : 0.0;

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
                })
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

}
