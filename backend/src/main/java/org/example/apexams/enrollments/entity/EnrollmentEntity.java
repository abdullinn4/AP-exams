package org.example.apexams.enrollments.entity;

import jakarta.persistence.*;
import lombok.*;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.enrollments.entity.enums.EnrollmentStatus;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.tariffs.entity.enums.TariffTier;
import org.example.apexams.users.entity.UserEntity;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(
        name = "enrollments",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"user_id", "course_id"})
        }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EnrollmentEntity {

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "course_id", nullable = false)
    private CourseEntity course;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "tariff_id", nullable = false)
    private TariffEntity tariff;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TariffTier tier;

    @Column(name = "access_from", nullable = false)
    private Instant accessFrom;

    @Column(name = "access_to")
    private Instant accessTo;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EnrollmentStatus status;
}

