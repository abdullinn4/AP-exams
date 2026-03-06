package org.example.apexams.likes.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(
        name = "course_likes",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"course_slug", "user_key"})
        }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
public class CourseLikeEntity {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(name = "course_slug", nullable = false)
    private String courseSlug;

    @Column(name = "user_key", nullable = false)
    private String userKey;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;
}
