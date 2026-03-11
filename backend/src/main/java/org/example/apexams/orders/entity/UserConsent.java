package org.example.apexams.orders.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "user_consents", indexes = {
        @Index(name = "idx_email", columnList = "email"),
        @Index(name = "idx_checkout_id", columnList = "checkoutId"),
        @Index(name = "idx_created_at", columnList = "createdAt")
})
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserConsent {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false, length = 255)
    private String email;

    @Column(name = "checkout_id", nullable = false, length = 36)
    private String checkoutId;

    @Column(nullable = false)
    private Boolean acceptedTerms;

    @Column(nullable = false)
    private Instant acceptedAt;

    @Column(nullable = false, length = 45)
    private String ipAddress;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String userAgent;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private Instant createdAt;
}
