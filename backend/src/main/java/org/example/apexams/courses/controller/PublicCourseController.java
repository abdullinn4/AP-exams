package org.example.apexams.courses.controller;

import lombok.RequiredArgsConstructor;
import org.example.apexams.courses.dto.CourseResponse;
import org.example.apexams.courses.service.CourseService;
import org.example.apexams.module.dto.ModuleResponse;
import org.example.apexams.module.service.ModuleService;
import org.example.apexams.tariffs.dto.TariffResponse;
import org.example.apexams.tariffs.service.TariffService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/public/courses")
@RequiredArgsConstructor
public class PublicCourseController {
    private final CourseService courseService;
    private final ModuleService moduleService;
    private final TariffService tariffService;

    @GetMapping
    public ResponseEntity<List<CourseResponse>> getPublishedCourses() {
        return ResponseEntity.ok(courseService.getPublishedCourses());
    }

    @GetMapping("/{slug}/preview")
    public ResponseEntity<CourseResponse> getCourseBySlug(@PathVariable String slug) {
        return ResponseEntity.ok(courseService.getCourseBySlug(slug));
    }

    @GetMapping("/{courseId}/modules")
    public ResponseEntity<List<ModuleResponse>> getModulesByCourseId(@PathVariable UUID courseId) {
        return ResponseEntity.ok(moduleService.getModulesByCourse(courseId));
    }

    @GetMapping("/{courseId}/tariffs")
    public ResponseEntity<List<TariffResponse>> getActiveTariffs(@PathVariable UUID courseId) {
        return ResponseEntity.ok(tariffService.getActiveTariffsByCourse(courseId));
    }
}
