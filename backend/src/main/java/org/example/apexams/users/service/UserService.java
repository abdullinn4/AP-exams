package org.example.apexams.users.service;


import org.example.apexams.users.dto.CheckoutPrepareRequest;
import org.example.apexams.users.dto.UserResponse;
import org.example.apexams.users.entity.enums.Role;

import java.util.UUID;

public interface UserService {
    String createUser(CheckoutPrepareRequest userDto);

    String generatePassword();

    String resetPassword(String email);

    UserResponse getUserByEmail(String email);

    UserResponse getUserById(UUID uuid);

    void updateDiscordNickname(String email, String nickname);

    void blockUser(UUID uuid);

    void unblockUser(UUID uuid);

    void changeRole(UUID uuid, Role role);

}
