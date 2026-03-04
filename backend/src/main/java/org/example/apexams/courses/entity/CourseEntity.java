package org.example.apexams.courses.entity;

import jakarta.persistence.*;
import lombok.*;
import org.example.apexams.courses.entity.enums.CourseStatus;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.Instant;
import java.util.UUID;

import static org.example.apexams.courses.entity.enums.CourseStatus.DRAFT;

@Entity
@Table(name = "courses")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
public class CourseEntity {
    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, unique = true)
    private String slug;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(columnDefinition = "TEXT")
    private String snippet;

    @Column(name = "preview_video_url", columnDefinition = "TEXT")
    private String previewVideoUrl;

    @Column(name = "intro_video_url", columnDefinition = "TEXT")
    private String introVideoUrl;

    @Column(name = "cover_url", columnDefinition = "TEXT")
    private String coverUrl;

    @Column(name = "course_image_url", columnDefinition = "TEXT")
    private String courseImageUrl;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    @Column(nullable = false)
    private CourseStatus status = DRAFT;

    @Column(name = "discord_invite_url", columnDefinition = "TEXT")
    private String discordInviteUrl;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;
}
