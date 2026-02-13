package org.example.apexams.dataloader.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.dataloader.service.CourseDataLoaderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/data-loader")
@RequiredArgsConstructor
@Slf4j
public class DataLoaderController {

    private final CourseDataLoaderService courseDataLoaderService;

    @PostMapping("/load-course/{courseSlug}")
    public ResponseEntity<String> loadCourseData(@PathVariable String courseSlug) {
        try {
            log.info("Received request to load course data: {}", courseSlug);
            courseDataLoaderService.loadCourseData(courseSlug);
            return ResponseEntity.ok("Successfully loaded course data for: " + courseSlug);
        } catch (Exception e) {
            log.error("Error loading course data for: {}", courseSlug, e);
            return ResponseEntity.internalServerError()
                    .body("Error loading course data: " + e.getMessage());
        }
    }
}
