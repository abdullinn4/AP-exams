package org.example.apexams.likes.repo;

import org.example.apexams.likes.entity.CourseLikeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CourseLikeRepository extends JpaRepository<CourseLikeEntity, Long> {

    long countByCourseSlug(String courseSlug);

    boolean existsByCourseSlugAndUserKey(String courseSlug, String userKey);

    Optional<CourseLikeEntity> findByCourseSlugAndUserKey(String courseSlug, String userKey);

    void deleteByCourseSlugAndUserKey(String courseSlug, String userKey);
}
