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
import org.example.apexams.module.dto.ModuleWithProgressResponse;
import org.example.apexams.module.entity.ModuleEntity;
import org.example.apexams.module.repo.ModuleRepository;
import org.example.apexams.moduleProgress.dto.ModuleProgressResponse;
import org.example.apexams.moduleProgress.entity.ModuleProgressEntity;
import org.example.apexams.moduleProgress.entity.enums.ModuleProgressStatus;
import org.example.apexams.moduleProgress.repo.ModuleProgressRepository;
import org.example.apexams.moduleProgress.service.ModuleProgressService;
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
    private final ModuleRepository moduleRepository;
    private final ModuleProgressRepository moduleProgressRepository;
    private final ModuleProgressService moduleProgressService;

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

                    List<ModuleEntity> allModules = moduleRepository.findByCourseIdOrderByOrderIndex(course.getId());
                    int totalModules = allModules.size();

                    List<ModuleProgressEntity> completedModules = moduleProgressRepository.findAllByUserId(userId)
                            .stream()
                            .filter(p -> p.getStatus() == ModuleProgressStatus.COMPLETED)
                            .filter(p -> allModules.stream().anyMatch(m -> m.getId().equals(p.getModule().getId())))
                            .toList();

                    int completed = completedModules.size();
                    double progressPercentage = totalModules > 0 ? (completed * 100.0 / totalModules) : 0.0;

                    ModuleProgressEntity lastAccessed = moduleProgressRepository.findAllByUserId(userId)
                            .stream()
                            .filter(p -> allModules.stream().anyMatch(m -> m.getId().equals(p.getModule().getId())))
                            .max(Comparator.comparing(ModuleProgressEntity::getId))
                            .orElse(null);

                    return new CourseWithProgressResponse(
                            course.getId(),
                            course.getTitle(),
                            course.getSlug(),
                            course.getCoverUrl(),
                            enrollment.getTier(),
                            totalModules,
                            completed,
                            progressPercentage,
                            lastAccessed != null ? lastAccessed.getModule().getId() : null,
                            lastAccessed != null ? lastAccessed.getModule().getTitle() : null
                    );
                })
                .collect(Collectors.toList());
    }

    @Override
    public CourseDetailsResponse getCourseWithModules(UUID userId, UUID courseId) {
        // Проверка доступа
        if (!enrollmentService.hasAccess(userId, courseId)) {
            throw new IllegalStateException("User does not have access to this course");
        }

        CourseResponse course = courseService.getCourse(courseId);
        // Получаем модули с прогрессом
        List<ModuleEntity> modules = moduleRepository.findByCourseIdOrderByOrderIndex(courseId);

        Map<UUID, ModuleProgressResponse> progressMap = moduleProgressService.getUserProgress(userId)
                .stream()
                .collect(Collectors.toMap(ModuleProgressResponse::moduleId, p -> p));

        List<ModuleWithProgressResponse> modulesWithProgress = modules.stream()
                .map(module -> {
                    ModuleProgressResponse progress = progressMap.get(module.getId());
                    return new ModuleWithProgressResponse(
                            module.getId(),
                            module.getCourse().getId(),
                            module.getTitle(),
                            module.getOrderIndex(),
                            module.getReleaseAt(),
                            progress != null ? progress.status() : ModuleProgressStatus.NOT_STARTED,
                            progress != null ? progress.completedAt() : null
                    );
                })
                .collect(Collectors.toList());

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
                modulesWithProgress
        );
    }

}
