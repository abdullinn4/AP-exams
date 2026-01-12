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

    // Получение по slug (для публичных страниц /courses/{slug})
    CourseResponse getCourseBySlug(String slug);

    // Обновление курса (админ)
    void updateCourse(UUID id, CreateCourseRequest dto);

    // Публикация курса (админ)
    void publishCourse(UUID id);

    // Снятие с публикации (админ)
    void unpublishCourse(UUID id);

    // Получение только опубликованных курсов (для витрины)
    List<CourseResponse> getPublishedCourses();

    // Удаление курса (админ)
    void deleteCourse(UUID id);

    List<CourseResponse> getCoursesByIds(List<UUID> ids);
}
