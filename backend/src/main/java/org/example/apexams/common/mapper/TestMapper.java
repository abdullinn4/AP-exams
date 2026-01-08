package org.example.apexams.common.mapper;

import org.example.apexams.tests.dto.CreateTestRequest;
import org.example.apexams.tests.dto.TestAttemptResponse;
import org.example.apexams.tests.dto.TestQuestionResponse;
import org.example.apexams.tests.dto.TestResponse;
import org.example.apexams.tests.entity.TestAttemptEntity;
import org.example.apexams.tests.entity.TestEntity;
import org.example.apexams.tests.entity.TestQuestionEntity;
import org.springframework.stereotype.Component;

@Component
public class TestMapper {
    public TestResponse toDto(TestEntity entity) {
        return new TestResponse(
                entity.getId(),
                entity.getCourse().getId(),  // ← Добавить
                entity.getModule() != null ? entity.getModule().getId() : null,  // ← Добавить
                entity.getTitle(),
                entity.getType().name(),
                entity.getTimeLimitSec(),
                entity.getAttemptsLimit(),
                entity.getMinTier(),
                entity.isPublished()
        );
    }

    public TestEntity toEntity(CreateTestRequest dto) {
        return TestEntity.builder()
                .type(dto.type())
                .title(dto.title())
                .timeLimitSec(dto.timeLimitSec())
                .attemptsLimit(dto.attemptsLimit())
                .minTier(dto.minTier())
                .isPublished(false)
                .build();
    }

    public TestQuestionResponse toDto(TestQuestionEntity testQuestionEntity){
        return new TestQuestionResponse(
                testQuestionEntity.getId(),
                testQuestionEntity.getTest().getId(),
                testQuestionEntity.getQuestion().getId(),
                testQuestionEntity.getOrderIndex()
        );
    }

    public TestAttemptResponse toDto(TestAttemptEntity testAttemptEntity){
        return new TestAttemptResponse(
                testAttemptEntity.getId(),
                testAttemptEntity.getTest().getId(),
                testAttemptEntity.getUser().getId(),
                testAttemptEntity.getStartedAt(),
                testAttemptEntity.getFinishedAt(),
                testAttemptEntity.getAnswersJson(),
                testAttemptEntity.getScore(),
                testAttemptEntity.getResultJson()
        );
    }
}
