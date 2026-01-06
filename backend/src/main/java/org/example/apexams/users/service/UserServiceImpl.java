package org.example.apexams.users.service;

import lombok.RequiredArgsConstructor;
import org.example.apexams.users.dto.CheckoutPrepareRequest;
import org.example.apexams.users.entity.UserEntity;
import org.example.apexams.users.repo.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Override
    public String createUser(CheckoutPrepareRequest userDto) {
        try{
            logger.info("Сохранение пользователя: {}", userDto.email());
            if (userRepository.existsByEmail(userDto.email()) | userRepository.existsByDiscordNickname(userDto.discordNickname())){
                throw new IllegalArgumentException("Пользователь с этим адресом электронной почты или никнэймом уже существует");
            }

            String rawPassword = generatePassword();

            String encoderPassword = passwordEncoder.encode(rawPassword);

            UserEntity userEntity = UserEntity.builder()
                    .email(userDto.email())
                    .discordNickname(userDto.discordNickname())
                    .passwordHash(encoderPassword)
                    .build();

            userRepository.save(userEntity);
            logger.info("Пользователь успешно сохранен: {}", userDto.email());

            return rawPassword;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public String generatePassword() {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder password = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            int index = (int) (Math.random() * chars.length());
            password.append(chars.charAt(index));
        }
        return password.toString();
    }


    @Override
    public void setPassword(String token, String newPassword) {

    }

    @Override
    public void resetPassword(String token, String newPassword) {

    }
}
