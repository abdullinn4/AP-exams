package org.example.apexams.users.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.mapper.UserMapper;
import org.example.apexams.users.dto.CheckoutPrepareRequest;
import org.example.apexams.users.dto.UserResponse;
import org.example.apexams.users.entity.UserEntity;
import org.example.apexams.users.entity.enums.Role;
import org.example.apexams.users.entity.enums.UserStatus;
import org.example.apexams.users.repo.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.SecureRandom;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    @Transactional
    @Override
    public String createUser(CheckoutPrepareRequest userDto) {
        log.info("Saving user: {}", userDto.email());
        if (userRepository.existsByEmail(userDto.email()) || userRepository.existsByDiscordNickname(userDto.discordNickname())) {
            throw new IllegalArgumentException("A user with this email address or nickname already exists.");
        }

        String rawPassword = generatePassword();

        String encoderPassword = passwordEncoder.encode(rawPassword);

        UserEntity userEntity = UserEntity.builder()
                .email(userDto.email())
                .discordNickname(userDto.discordNickname())
                .passwordHash(encoderPassword)
                .build();

        userRepository.save(userEntity);
        log.info("User successfully saved: {}", userDto.email());

        return rawPassword;
    }

    @Override
    public String generatePassword() {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        SecureRandom random = new SecureRandom();
        StringBuilder password = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            int index = random.nextInt(chars.length());
            password.append(chars.charAt(index));
        }
        return password.toString();
    }

    @Transactional
    @Override
    public String resetPassword(String email) {
        UserEntity userEntity = findUserByEmailOrThrow(email);

        String rawPassword = generatePassword();
        userEntity.setPasswordHash(passwordEncoder.encode(rawPassword));
        userRepository.save(userEntity);

        log.info("Password reset for user: {}", email);
        return rawPassword;
    }

    @Override
    @Transactional(readOnly = true)
    public UserResponse getUserByEmail(String email) {
        return userMapper.toDto(findUserByEmailOrThrow(email));
    }

    @Override
    @Transactional(readOnly = true)
    public UserResponse getUserById(UUID uuid) {
        return userMapper.toDto(findUserByIdOrThrow(uuid));
    }

    @Override
    @Transactional
    public void updateDiscordNickname(String email, String nickname) {
        if (userRepository.existsByDiscordNickname(nickname)) {
            throw new IllegalArgumentException("Discord nickname already exists");
        }

        UserEntity userEntity = findUserByEmailOrThrow(email);
        userEntity.setDiscordNickname(nickname);
        userRepository.save(userEntity);

        log.info("DiscordNickname successfully updated for user: {}", email);
    }

    @Override
    @Transactional
    public void blockUser(UUID uuid) {
        UserEntity userEntity = findUserByIdOrThrow(uuid);
        userEntity.setStatus(UserStatus.BLOCKED);
        userRepository.save(userEntity);

        log.info("User successfully blocked: {}", uuid);
    }

    @Override
    @Transactional
    public void unblockUser(UUID uuid) {
        UserEntity userEntity = findUserByIdOrThrow(uuid);
        userEntity.setStatus(UserStatus.ACTIVE);
        userRepository.save(userEntity);

        log.info("User successfully unblocked: {}", uuid);

    }

    @Override
    @Transactional
    public void changeRole(UUID uuid, Role role) {
        UserEntity userEntity = findUserByIdOrThrow(uuid);
        userEntity.setRole(role);
        userRepository.save(userEntity);

        log.info("User role successfully changed for user: {}", uuid);
    }

    private UserEntity findUserByEmailOrThrow(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException(
                        "User with email '" + email + "' does not exist"
                ));
    }

    private UserEntity findUserByIdOrThrow(UUID id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException(
                        "User with id '" + id + "' does not exist"
                ));
    }
}
