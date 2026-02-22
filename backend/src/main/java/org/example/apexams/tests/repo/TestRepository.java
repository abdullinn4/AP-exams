package org.example.apexams.tests.repo;

import org.example.apexams.tests.entity.TestEntity;
import org.example.apexams.tests.entity.enums.TestType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TestRepository extends JpaRepository<TestEntity, UUID> {
    List<TestEntity> findAllByCourseId(UUID courseId);

    TestEntity findByLessonId(UUID lessonId);

    List<TestEntity> findByCourseIdAndType(UUID courseId, TestType type);
}
