package org.example.apexams.dashboard.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.exception.ResourceNotFoundException;
import org.example.apexams.courses.dto.CourseResponse;
import org.example.apexams.courses.dto.CourseWithProgressResponse;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.courses.entity.enums.CourseStatus;
import org.example.apexams.courses.repo.CourseRepository;
import org.example.apexams.courses.service.CourseService;
import org.example.apexams.dashboard.dto.CourseCardResponse;
import org.example.apexams.dashboard.dto.CourseLessonPreview;
import org.example.apexams.dashboard.dto.DashboardCourseDetailResponse;
import org.example.apexams.dashboard.dto.DashboardResponse;
import org.example.apexams.enrollments.dto.EnrollmentResponse;
import org.example.apexams.enrollments.repo.EnrollmentRepository;
import org.example.apexams.enrollments.service.EnrollmentService;
import org.example.apexams.lessonProgress.repo.LessonProgressRepository;
import org.example.apexams.lessons.dto.LessonResponse;
import org.example.apexams.lessons.entity.LessonEntity;
import org.example.apexams.lessons.repo.LessonRepository;
import org.example.apexams.lessons.service.LessonService;
import org.example.apexams.lessonProgress.dto.LessonProgressResponse;
import org.example.apexams.lessonProgress.entity.enums.LessonProgressStatus;
import org.example.apexams.lessonProgress.service.LessonProgressService;
import org.example.apexams.notifications.dto.NotificationResponse;
import org.example.apexams.notifications.service.NotificationService;
import org.example.apexams.tests.dto.TestAttemptResponse;
import org.example.apexams.tests.service.TestAttemptService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class DashboardServiceImpl implements DashboardService {
    private final CourseRepository courseRepository;
    private final LessonRepository lessonRepository;
    private final LessonProgressService lessonProgressService;
    private final EnrollmentService enrollmentService;
    private final CourseService courseService;

    @Transactional(readOnly = true)
    @Override
    public DashboardResponse getDashboard(UUID userId) {
        List<CourseCardResponse> myCourses = getMyCourses(userId);
        List<CourseCardResponse> availableCourses = getAvailableCourses(userId);


        List<DashboardCourseDetailResponse> selectedCourseDetails = myCourses.stream()
                .map(course -> getCourseDetail(userId, course.id()))
                .toList();


        return new DashboardResponse(myCourses, availableCourses, selectedCourseDetails);
    }


    private DashboardCourseDetailResponse getCourseDetail(UUID userId, UUID courseId) {
        CourseEntity course = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found"));

        // Получаем все уроки курса с сортировкой
        List<LessonEntity> allLessons = lessonRepository.findAllByCourseIdOrderByUnitAndLesson(courseId);

        // Получаем прогресс пользователя по всем урокам
        Map<UUID, LessonProgressStatus> progressMap = lessonProgressService.getUserProgress(userId)
                .stream()
                .collect(Collectors.toMap(
                        LessonProgressResponse::lessonId,
                        LessonProgressResponse::status
                ));

        // Создаем список уроков с их статусами
        List<CourseLessonPreview> allLessonPreviews = allLessons.stream()
                .map(lesson -> {
                    LessonProgressStatus status = progressMap.getOrDefault(
                            lesson.getId(),
                            LessonProgressStatus.NOT_STARTED
                    );
                    return new CourseLessonPreview(
                            lesson.getId(),
                            lesson.getTitle(),
                            lesson.getOrderIndex(),
                            lesson.getUnit().getId(),
                            lesson.getUnit().getTitle(),
                            status
                    );
                })
                .toList();

        // Фильтруем и сортируем: сначала IN_PROGRESS, потом NOT_STARTED
        List<CourseLessonPreview> inProgressLessons = allLessonPreviews.stream()
                .filter(l -> l.status() == LessonProgressStatus.IN_PROGRESS)
                .limit(3)
                .toList();

        List<CourseLessonPreview> selectedLessons = new ArrayList<>(inProgressLessons);

        // Если меньше 3, добавляем NOT_STARTED
        if (selectedLessons.size() < 3) {
            List<CourseLessonPreview> notStartedLessons = allLessonPreviews.stream()
                    .filter(l -> l.status() == LessonProgressStatus.NOT_STARTED)
                    .limit(3 - selectedLessons.size())
                    .toList();
            selectedLessons.addAll(notStartedLessons);
        }

        return new DashboardCourseDetailResponse(
                course.getId(),
                course.getTitle(),
                course.getSlug(),
                course.getSnippet(),
                selectedLessons
        );
    }

    private List<CourseCardResponse> getMyCourses(UUID userId) {
        return enrollmentService.getUserEnrollments(userId).stream()
                .map(enrollment -> {
                    CourseResponse course = courseService.getCourse(enrollment.courseId());
                    return new CourseCardResponse(
                            course.id(),
                            course.title(),
                            course.slug(),
                            course.coverUrl()
                    );
                })
                .toList();
    }

    private List<CourseCardResponse> getAvailableCourses(UUID userId) {
        // Получаем ID курсов, на которые пользователь уже записан
        Set<UUID> enrolledCourseIds = enrollmentService.getUserEnrollments(userId).stream()
                .map(EnrollmentResponse::courseId)
                .collect(Collectors.toSet());

        // Получаем все опубликованные курсы
        return courseRepository.findAllByStatus(CourseStatus.PUBLISHED).stream()
                .filter(course -> !enrolledCourseIds.contains(course.getId()))
                .map(course -> new CourseCardResponse(
                        course.getId(),
                        course.getTitle(),
                        course.getSlug(),
                        course.getCoverUrl()
                ))
                .toList();
    }
}
