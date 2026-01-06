package org.example.apexams.module.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "module_content")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ModuleContentEntity {
    @Id
    @Column(name = "module_id")
    private UUID moduleId;

    @MapsId
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "module_id")
    private ModuleEntity module;

    @Column(name = "video_payload", columnDefinition = "jsonb")
    private String videoPayload;

    @Column(name = "text_payload", columnDefinition = "text")
    private String textPayload;
}
