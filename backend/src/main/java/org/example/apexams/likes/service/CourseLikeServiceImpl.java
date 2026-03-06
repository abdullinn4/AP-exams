package org.example.apexams.likes.service;

import lombok.RequiredArgsConstructor;
import org.example.apexams.likes.dto.CourseLikeResponseDto;
import org.example.apexams.likes.entity.CourseLikeEntity;
import org.example.apexams.likes.repo.CourseLikeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CourseLikeServiceImpl implements CourseLikeService {
    private final CourseLikeRepository repository;

    @Transactional
    @Override
    public CourseLikeResponseDto toggleLike(String courseSlug, String userKey) {
        Optional<CourseLikeEntity> like =
                repository.findByCourseSlugAndUserKey(courseSlug, userKey);

        boolean liked;

        if (like.isPresent()) {
            repository.delete(like.get());
            liked = false;
        } else {
            CourseLikeEntity newLike = CourseLikeEntity.builder()
                    .courseSlug(courseSlug)
                    .userKey(userKey)
                    .build();

            repository.save(newLike);
            liked = true;
        }

        long count = repository.countByCourseSlug(courseSlug);

        return new CourseLikeResponseDto(courseSlug, count, liked);
    }

    @Transactional(readOnly = true)
    @Override
    public CourseLikeResponseDto getLikes(String courseSlug, String userKey) {
        long count = repository.countByCourseSlug(courseSlug);

        boolean liked =
                repository.existsByCourseSlugAndUserKey(courseSlug, userKey);

        return new CourseLikeResponseDto(courseSlug, count, liked);
    }
}
