package org.example.apexams.tests.entity;

import jakarta.persistence.*;
import lombok.*;
import org.example.apexams.questionBank.entity.QuestionEntity;

import java.util.UUID;

@Entity
@Table(
        name = "test_questions",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "uk_test_question_unique",
                        columnNames = {"test_id", "question_id"}
                ),
                @UniqueConstraint(
                        name = "uk_test_question_order",
                        columnNames = {"test_id", "order_index"}
                )
        }
)
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TestQuestionEntity {

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "test_id", nullable = false)
    private TestEntity test;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id", nullable = false)
    private QuestionEntity question;

    @Column(name = "order_index", nullable = false)
    private int orderIndex;
}
