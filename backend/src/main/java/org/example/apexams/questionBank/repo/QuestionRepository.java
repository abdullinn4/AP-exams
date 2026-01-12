package org.example.apexams.questionBank.repo;

import org.example.apexams.questionBank.entity.QuestionEntity;
import org.example.apexams.questionBank.entity.enums.QuestionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface QuestionRepository extends JpaRepository<QuestionEntity, UUID> {
    List<QuestionEntity> findAllByCourseId(UUID courseId);

    List<QuestionEntity> findAllByCourseIdAndType(UUID courseId, QuestionType type);
}
