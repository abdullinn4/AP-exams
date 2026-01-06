package org.example.apexams.common.mapper;

import org.example.apexams.users.dto.UserResponse;
import org.example.apexams.users.entity.UserEntity;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public UserResponse toDto(UserEntity userEntity) {
        return new UserResponse(
                userEntity.getId(),
                userEntity.getEmail(),
                userEntity.getDiscordNickname(),
                userEntity.getStatus(),
                userEntity.getCreatedAt()
        );
    }
}
