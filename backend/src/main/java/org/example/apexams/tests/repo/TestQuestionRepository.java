package org.example.apexams.tests.repo;

import org.example.apexams.tests.entity.TestQuestionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TestQuestionRepository extends JpaRepository<TestQuestionEntity, UUID> {
    List<TestQuestionEntity> findAllByTestId(UUID testId);

    List<TestQuestionEntity> findAllByTestIdOrderByOrderIndex(UUID testId);
}
