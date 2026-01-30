package org.example.apexams.lessonProgress.entity;

import jakarta.persistence.*;
import lombok.*;
import org.example.apexams.lessons.entity.LessonEntity;
import org.example.apexams.lessonProgress.entity.enums.LessonProgressStatus;
import org.example.apexams.users.entity.UserEntity;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(
        name = "lesson_progress",
        uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "lesson_id"})
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LessonProgressEntity {

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lesson_id", nullable = false)
    private LessonEntity lesson;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private LessonProgressStatus status = LessonProgressStatus.NOT_STARTED;

    private Instant completedAt;
}

