package org.example.apexams.likes.service;

import org.example.apexams.likes.dto.CourseLikeResponseDto;

public interface CourseLikeService {
    CourseLikeResponseDto toggleLike(String courseSlug, String userKey);
    CourseLikeResponseDto getLikes(String courseSlug, String userKey);
}
