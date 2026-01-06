package org.example.apexams.common.mapper;

import org.example.apexams.enrollments.dto.EnrollmentResponse;
import org.example.apexams.enrollments.entity.EnrollmentEntity;
import org.springframework.stereotype.Component;

@Component
public class EnrollmentMapper {

    public EnrollmentResponse toDto(EnrollmentEntity entity) {
        return new EnrollmentResponse(
                entity.getCourse().getId(),
                entity.getCourse().getTitle(),
                entity.getTier(),
                entity.getStatus(),
                entity.getAccessFrom(),
                entity.getAccessTo()
        );
    }
}

