package org.example.apexams.users.repo;

import org.example.apexams.users.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, UUID> {
    Optional<UserEntity> findByEmail(String email);

    Optional<UserEntity> findByEmailAndDiscordNickname(String email, String discordNickname);

    boolean existsByEmail(String email);

    boolean existsByDiscordNickname(String discordNickname);
}
