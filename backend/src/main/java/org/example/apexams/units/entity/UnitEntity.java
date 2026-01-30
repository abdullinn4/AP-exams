package org.example.apexams.units.entity;

import jakarta.persistence.*;
import lombok.*;
import org.example.apexams.courses.entity.CourseEntity;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "units")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class UnitEntity {

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id", nullable = false)
    private CourseEntity course;

    @Column(nullable = false)
    private String title;

    @Column(length = 255)
    private String snippet;  // Краткое описание для карточек

    @Column(columnDefinition = "TEXT")
    private String description;  // Полное описание юнита

    @Column(name = "icon_url", columnDefinition = "TEXT")
    private String iconUrl;  // URL иконки юнита

    @Column(name = "order_index", nullable = false)
    private Integer orderIndex;  // Порядок отображения

    @Column(name = "is_published", nullable = false)
    @Builder.Default
    private Boolean isPublished = false;  // Опубликован ли юнит

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;
}
