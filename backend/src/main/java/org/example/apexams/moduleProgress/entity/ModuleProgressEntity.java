package org.example.apexams.moduleProgress.entity;

import jakarta.persistence.*;
import lombok.*;
import org.example.apexams.module.entity.ModuleEntity;
import org.example.apexams.moduleProgress.entity.enums.ModuleProgressStatus;
import org.example.apexams.users.entity.UserEntity;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(
        name = "module_progress",
        uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "module_id"})
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ModuleProgressEntity {

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "module_id", nullable = false)
    private ModuleEntity module;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private ModuleProgressStatus status = ModuleProgressStatus.NOT_STARTED;

    private Instant completedAt;
}

