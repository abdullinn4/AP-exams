package org.example.apexams.tests.entity;

import jakarta.persistence.*;
import lombok.*;
import org.example.apexams.users.entity.UserEntity;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "test_attempts")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TestAttemptEntity {

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "test_id", nullable = false)
    private TestEntity test;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @Column(name = "started_at", nullable = false)
    @Builder.Default
    private Instant startedAt = Instant.now();

    @Column(name = "finished_at")
    private Instant finishedAt;

    @Column(name = "answers_json", columnDefinition = "jsonb")
    @JdbcTypeCode(SqlTypes.JSON)
    private String answersJson;

    @Column(columnDefinition = "numeric")
    private double score;

    @Column(name = "result_json", columnDefinition = "jsonb")
    @JdbcTypeCode(SqlTypes.JSON)
    private String resultJson;
}
