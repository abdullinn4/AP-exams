package org.example.apexams.users.service;

import lombok.RequiredArgsConstructor;
import org.example.apexams.courses.dto.CourseResponse;
import org.example.apexams.courses.service.CourseService;
import org.example.apexams.enrollments.dto.EnrollmentResponse;
import org.example.apexams.enrollments.entity.enums.EnrollmentStatus;
import org.example.apexams.enrollments.service.EnrollmentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudentCourseServiceImpl implements StudentCourseService {
    private final EnrollmentService enrollmentService;
    private final CourseService courseService;

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

}
