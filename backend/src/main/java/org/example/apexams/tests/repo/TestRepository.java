package org.example.apexams.tests.repo;

import org.example.apexams.tests.entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TestRepository extends JpaRepository<TestEntity, UUID> {
    List<TestEntity> findAllByCourseId(UUID courseId);

    List<TestEntity> findAllByLessonId(UUID lessonId);
}
