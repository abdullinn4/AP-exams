package org.example.apexams.dashboard.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.courses.dto.CourseResponse;
import org.example.apexams.courses.dto.CourseWithProgressResponse;
import org.example.apexams.courses.service.CourseService;
import org.example.apexams.dashboard.dto.ContinueLearningItem;
import org.example.apexams.dashboard.dto.DashboardResponse;
import org.example.apexams.dashboard.dto.StatsPreview;
import org.example.apexams.enrollments.dto.EnrollmentResponse;
import org.example.apexams.enrollments.service.EnrollmentService;
import org.example.apexams.lessons.dto.LessonResponse;
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

import java.util.Comparator;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class DashboardServiceImpl implements DashboardService {
    private final LessonProgressService lessonProgressService;
    private final LessonService lessonService;
    private final CourseService courseService;
    private final EnrollmentService enrollmentService;
    private final NotificationService notificationService;
    private final TestAttemptService testAttemptService;

    @Transactional(readOnly = true)
    @Override
    public DashboardResponse getDashboard(UUID userId) {
        ContinueLearningItem continueLearningItem = getContinueLearningItem(userId);
        List<CourseWithProgressResponse> recentCourses = getRecentCourses(userId);
        List<NotificationResponse> recentNotifications = getRecentNotifications(userId);
        StatsPreview statsPreview = getStatsPreview(userId);

        return new DashboardResponse(
                continueLearningItem,
                recentCourses,
                recentNotifications,
                statsPreview
        );
    }

    private ContinueLearningItem getContinueLearningItem(UUID userId) {
        List<LessonProgressResponse> inProgressLessons = lessonProgressService.getUserProgress(userId)
                .stream()
                .filter(p -> p.status() == LessonProgressStatus.IN_PROGRESS)
                .sorted(Comparator.comparing(LessonProgressResponse::id).reversed())
                .toList();

        if (!inProgressLessons.isEmpty()) {
            LessonProgressResponse lastProgress = inProgressLessons.getFirst();
            LessonResponse lesson = lessonService.getLesson(lastProgress.lessonId());
            // TODO: Need to get courseId from lesson.unitId
            // CourseResponse course = courseService.getCourse(lesson.unitId());

            // double progressPercentage = calculateCourseProgress(userId, course.id());

            return new ContinueLearningItem(
                    null, // course.id(),
                    "Course", // course.title(),
                    lesson.id(),
                    lesson.title(),
                    0.0 // progressPercentage
            );
        }

        List<EnrollmentResponse> enrollments = enrollmentService.getUserEnrollments(userId);
        if (!enrollments.isEmpty()) {
            EnrollmentResponse firstEnrollment = enrollments.getFirst();
            CourseResponse course = courseService.getCourse(firstEnrollment.courseId());

            // TODO: Need to get lessons by course, not by unit
            // List<LessonResponse> lessons = lessonService.getLessonsByUnit(course.id());
            // if (!lessons.isEmpty()) {
            //     LessonResponse firstLesson = lessons.getFirst();

            //     return new ContinueLearningItem(
            //             course.id(),
            //             course.title(),
            //             firstLesson.id(),
            //             firstLesson.title(),
            //             0.0
            //     );
            // }
        }
        return null;
    }

    private List<CourseWithProgressResponse> getRecentCourses(UUID userId) {
        List<EnrollmentResponse> enrollments = enrollmentService.getUserEnrollments(userId)
                .stream()
                .limit(3)
                .toList();

        return enrollments.stream()
                .map(enrollment -> {
                    CourseResponse course = courseService.getCourse(enrollment.courseId());

                    // TODO: Need to get lessons by course, not by unit
                    int totalLessons = 0;
                    int completedLessonsCount = 0;
                    double progressPercentage = 0.0;

                    return new CourseWithProgressResponse(
                            course.id(),
                            course.title(),
                            course.slug(),
                            course.coverUrl(),
                            enrollment.tier(),
                            totalLessons,
                            completedLessonsCount,
                            progressPercentage,
                            null,
                            null
                    );
                })
                .collect(Collectors.toList());
    }

    private List<NotificationResponse> getRecentNotifications(UUID userId) {
        return notificationService.getUserNotifications(userId)
                .stream()
                .limit(5)
                .toList();
    }

    private StatsPreview getStatsPreview(UUID userId) {
        long totalLessonsCompleted = lessonProgressService.getUserProgress(userId)
                .stream()
                .filter(p -> p.status() == LessonProgressStatus.COMPLETED)
                .count();

        List<TestAttemptResponse> allAttempts = testAttemptService.getAllUserAttempts(userId)
                .stream()
                .filter(a -> a.finishedAt() != null)
                .toList();

        int totalTestsCompleted = allAttempts.size();

        double averageTestScore = allAttempts.isEmpty() ? 0.0 :
                allAttempts.stream()
                        .mapToDouble(TestAttemptResponse::score)
                        .average()
                        .orElse(0.0);

        return new StatsPreview(
                (int) totalLessonsCompleted,
                totalTestsCompleted,
                averageTestScore
        );
    }

    private double calculateCourseProgress(UUID userId, UUID courseId) {
        // TODO: Need to get lessons by course, not by unit
        return 0.0;
    }
}
