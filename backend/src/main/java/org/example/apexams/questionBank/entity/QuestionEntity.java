package org.example.apexams.questionBank.entity;

import jakarta.persistence.*;
import lombok.*;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.questionBank.entity.enums.QuestionType;

import java.util.UUID;

@Entity
@Table(name = "question_bank")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class QuestionEntity {
    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id", referencedColumnName = "id", nullable = false)
    private CourseEntity course;

    @Column(name = "tags_json", columnDefinition = "jsonb")
    private String tagsJson;

    @Column(name = "type", nullable = false)
    @Enumerated(EnumType.STRING)
    private QuestionType type;

    @Column(columnDefinition = "text", nullable = false)
    private String prompt;

    @Column(name = "options_json", columnDefinition = "jsonb")
    private String optionsJson;

    @Column(name = "answer_key_json", columnDefinition = "jsonb")
    private String answerKeyJson;

    @Column(columnDefinition = "text")
    private String explanation;
}
