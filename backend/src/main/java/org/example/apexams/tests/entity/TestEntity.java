package org.example.apexams.tests.entity;

import jakarta.persistence.*;
import lombok.*;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.module.entity.ModuleEntity;
import org.example.apexams.tariffs.entity.enums.TariffTier;
import org.example.apexams.tests.entity.enums.TestType;

import java.util.UUID;

@Entity
@Table(name = "tests")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TestEntity {

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id", nullable = false)
    private CourseEntity course;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "module_id")
    private ModuleEntity module;

    @Column(name = "type", nullable = false)
    @Enumerated(EnumType.STRING)
    private TestType type;

    @Column(nullable = false)
    private String title;

    @Column(name = "time_limit_sec")
    private int timeLimitSec;

    @Column(name = "attempts_limit")
    private int attemptsLimit;

    @Column(name = "min_tier", nullable = false)
    @Enumerated(EnumType.STRING)
    private TariffTier minTier;

    @Column(name = "is_published")
    private boolean isPublished;

}
