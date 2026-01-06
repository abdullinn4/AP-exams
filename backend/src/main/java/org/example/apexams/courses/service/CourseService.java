package org.example.apexams.courses.service;

import org.example.apexams.courses.dto.CourseResponse;
import org.example.apexams.courses.dto.CreateCourseRequest;
import org.example.apexams.courses.entity.CourseEntity;

import java.util.List;
import java.util.UUID;

public interface CourseService {
    CourseEntity createCourse(CreateCourseRequest dto);
    CourseResponse getCourse(UUID id);
    List<CourseResponse> getAllCourses();
}
