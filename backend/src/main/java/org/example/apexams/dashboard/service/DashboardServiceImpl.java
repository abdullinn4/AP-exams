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
import org.example.apexams.module.dto.ModuleResponse;
import org.example.apexams.module.service.ModuleService;
import org.example.apexams.moduleProgress.dto.ModuleProgressResponse;
import org.example.apexams.moduleProgress.entity.enums.ModuleProgressStatus;
import org.example.apexams.moduleProgress.service.ModuleProgressService;
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
    private final ModuleProgressService moduleProgressService;
    private final ModuleService moduleService;
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
        List<ModuleProgressResponse> inProgressModules = moduleProgressService.getUserProgress(userId)
                .stream()
                .filter(p -> p.status() == ModuleProgressStatus.IN_PROGRESS)
                .sorted(Comparator.comparing(ModuleProgressResponse::id).reversed())
                .toList();

        if (!inProgressModules.isEmpty()) {
            ModuleProgressResponse lastProgress = inProgressModules.getFirst();
            ModuleResponse module = moduleService.getModule(lastProgress.moduleId());
            CourseResponse course = courseService.getCourse(module.courseId());

            double progressPercentage = calculateCourseProgress(userId, course.id());

            return new ContinueLearningItem(
                    course.id(),
                    course.title(),
                    module.id(),
                    module.title(),
                    progressPercentage
            );
        }

        List<EnrollmentResponse> enrollments = enrollmentService.getUserEnrollments(userId);
        if (!enrollments.isEmpty()) {
            EnrollmentResponse firstEnrollment = enrollments.getFirst();
            CourseResponse course = courseService.getCourse(firstEnrollment.courseId());

            List<ModuleResponse> modules = moduleService.getModulesByCourse(course.id());
            if (!modules.isEmpty()) {
                ModuleResponse firstModule = modules.getFirst();

                return new ContinueLearningItem(
                        course.id(),
                        course.title(),
                        firstModule.id(),
                        firstModule.title(),
                        0.0
                );
            }
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

                    List<ModuleResponse> allModules = moduleService.getModulesByCourse(course.id());
                    int totalModules = allModules.size();

                    List<ModuleProgressResponse> completedModules = moduleProgressService.getCourseProgress(userId)
                            .stream()
                            .filter(p -> p.status() == ModuleProgressStatus.COMPLETED)
                            .filter(p -> allModules.stream().anyMatch(m -> m.id().equals(p.moduleId())))
                            .toList();

                    int completedModulesCount = completedModules.size();
                    double progressPercentage = totalModules > 0 ? (completedModulesCount * 100.0 / totalModules) : 0.0;

                    ModuleProgressResponse lastAccessed = moduleProgressService.getUserProgress(userId)
                            .stream()
                            .filter(p -> allModules.stream().anyMatch(m -> m.id().equals(p.moduleId())))
                            .max(Comparator.comparing(ModuleProgressResponse::id))
                            .orElse(null);

                    return new CourseWithProgressResponse(
                            course.id(),
                            course.title(),
                            course.slug(),
                            course.coverUrl(),
                            enrollment.tier(),
                            totalModules,
                            completedModulesCount,
                            progressPercentage,
                            lastAccessed != null ? lastAccessed.moduleId() : null,
                            lastAccessed != null ? moduleService.getModule(lastAccessed.moduleId()).title() : null
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
        long totalModulesCompleted = moduleProgressService.getCourseProgress(userId)
                .stream()
                .filter(p -> p.status() == ModuleProgressStatus.COMPLETED)
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
                (int) totalModulesCompleted,
                totalTestsCompleted,
                averageTestScore
        );
    }

    private double calculateCourseProgress(UUID userId, UUID courseId) {
        List<ModuleResponse> allModules = moduleService.getModulesByCourse(courseId);
        int totalModules = allModules.size();

        if (totalModules == 0) {
            return 0.0;
        }

        long completedCount = moduleProgressService.getUserProgress(userId)
                .stream()
                .filter(p -> allModules.stream().anyMatch(m -> m.id().equals(p.moduleId())))
                .filter(p -> p.status() == ModuleProgressStatus.COMPLETED)
                .count();

        return (completedCount * 100.0) / totalModules;
    }
}
