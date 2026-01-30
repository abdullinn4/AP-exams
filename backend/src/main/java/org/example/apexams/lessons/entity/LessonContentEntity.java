package org.example.apexams.lessons.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "lesson_content")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LessonContentEntity {
    @Id
    @Column(name = "lesson_id")
    private UUID lessonId;

    @MapsId
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lesson_id")
    private LessonEntity lesson;

    @Column(name = "video_payload", columnDefinition = "jsonb")
    private String videoPayload;

    @Column(name = "text_payload", columnDefinition = "text")
    private String textPayload;
}
