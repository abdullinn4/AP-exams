package org.example.apexams.tariffs.entity;

import jakarta.persistence.*;
import lombok.*;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.tariffs.entity.enums.TariffTier;

import java.util.UUID;

import static org.example.apexams.tariffs.entity.enums.TariffTier.BASIC;

@Entity
@Table(name = "tariffs",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"course_id", "tier"})
        })
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TariffEntity {

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id", nullable = false)
    private CourseEntity course;

    @Column(nullable = false)
    private String title;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    @Column(nullable = false)
    private TariffTier tier = BASIC;

    @Column(name = "paddle_variant_id")
    private String paddleVariantId;

    @Column(name = "price_cents", nullable = false)
    private Integer priceCents;

    @Column(length = 3, nullable = false)
    @Builder.Default
    private String currency = "USD";

    @Column(name = "is_active", nullable = false)
    @Builder.Default
    private Boolean isActive = true;
}
