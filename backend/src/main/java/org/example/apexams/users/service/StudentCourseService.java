package org.example.apexams.users.service;

import org.example.apexams.courses.dto.CourseDetailsResponse;
import org.example.apexams.courses.dto.CourseResponse;
import org.example.apexams.courses.dto.CourseWithProgressResponse;

import java.util.List;
import java.util.UUID;

public interface StudentCourseService {
    List<CourseResponse> getCoursesByUser(UUID uuid);

    CourseResponse getCourseById(UUID uuid, UUID courseId);

    List<CourseWithProgressResponse> getCoursesWithProgress(UUID userId);

    CourseDetailsResponse getCourseWithModules(UUID userId, UUID courseId);

}
