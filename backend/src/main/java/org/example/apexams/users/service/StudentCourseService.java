package org.example.apexams.users.service;

import org.example.apexams.courses.dto.CourseResponse;

import java.util.List;
import java.util.UUID;

public interface StudentCourseService {
    List<CourseResponse> getCoursesByUser(UUID uuid);

    CourseResponse getCourseById(UUID uuid, UUID courseId);

}
