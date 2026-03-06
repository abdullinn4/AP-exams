package org.example.apexams.likes.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CourseLikeResponseDto {

    private String courseSlug;

    private long likesCount;

    private boolean likedByUser;
}
