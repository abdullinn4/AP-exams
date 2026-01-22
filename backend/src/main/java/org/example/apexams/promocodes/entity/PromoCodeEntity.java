package org.example.apexams.promocodes.entity;

import jakarta.persistence.*;
import lombok.*;
import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.promocodes.entity.enums.PromoCodeType;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.Instant;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "promo_codes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
public class PromoCodeEntity {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(unique = true, nullable = false, length = 50)
    private String code;

    @Column(nullable = false)
    private Integer discountPercent; // 10 = 10%

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PromoCodeType type; // GLOBAL, COURSE_SPECIFIC, TARIFF_SPECIFIC

    @Column(nullable = false)
    private Instant validFrom;

    @Column(nullable = false)
    private Instant validUntil;

    @Column(nullable = false)
    private Integer maxUses; // -1 = unlimited

    @Column(nullable = false)
    private Integer currentUses;

    @Column(nullable = false)
    private Boolean isActive;

    // For COURSE_SPECIFIC type
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "promo_code_courses",
            joinColumns = @JoinColumn(name = "promo_code_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    @Builder.Default
    private Set<CourseEntity> applicableCourses = new HashSet<>();

    // For TARIFF_SPECIFIC type
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "promo_code_tariffs",
            joinColumns = @JoinColumn(name = "promo_code_id"),
            inverseJoinColumns = @JoinColumn(name = "tariff_id")
    )
    @Builder.Default
    private Set<TariffEntity> applicableTariffs = new HashSet<>();

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    @Column(nullable = false)
    private Instant updatedAt;


    public boolean isValid() {
        Instant now = Instant.now();
        return isActive
                && now.isAfter(validFrom)
                && now.isBefore(validUntil)
                && (maxUses == -1 || currentUses < maxUses);
    }

    public boolean isApplicableToTariff(TariffEntity tariff) {
        return switch (type) {
            case GLOBAL -> true;
            case COURSE_SPECIFIC -> applicableCourses.contains(tariff.getCourse());
            case TARIFF_SPECIFIC -> applicableTariffs.contains(tariff);
        };
    }
}
