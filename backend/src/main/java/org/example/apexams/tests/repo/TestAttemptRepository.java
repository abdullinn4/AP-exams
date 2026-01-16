package org.example.apexams.tests.repo;

import org.example.apexams.tests.entity.TestAttemptEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TestAttemptRepository extends JpaRepository<TestAttemptEntity, UUID> {
    List<TestAttemptEntity> findAllByTestId(UUID testId);

    List<TestAttemptEntity> findAllByUserIdAndTestId(UUID userId, UUID testId);

    List<TestAttemptEntity> findAllByTestCourseId(UUID courseId);

    int countByUserIdAndTestId(UUID userId, UUID testId);

    List<TestAttemptEntity> findAllByUserId(UUID userId);
}
