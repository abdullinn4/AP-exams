package org.example.apexams.likes.controller;

import lombok.RequiredArgsConstructor;
import org.example.apexams.likes.dto.CourseLikeResponseDto;
import org.example.apexams.likes.service.CourseLikeService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/public/coming-soon")
@RequiredArgsConstructor
public class CourseLikeController {

    private final CourseLikeService service;

    @PostMapping("/{slug}/like")
    public CourseLikeResponseDto toggleLike(
            @PathVariable String slug,
            @RequestHeader("X-UserKey") String userKey
    ) {
        return service.toggleLike(slug, userKey);
    }

    @GetMapping("/{slug}/likes")
    public CourseLikeResponseDto getLikes(
            @PathVariable String slug,
            @RequestHeader("X-UserKey") String userKey
    ) {
        return service.getLikes(slug, userKey);
    }
}
