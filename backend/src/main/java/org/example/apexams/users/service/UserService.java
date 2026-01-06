package org.example.apexams.users.service;


import org.example.apexams.users.dto.CheckoutPrepareRequest;

public interface UserService {
    String createUser(CheckoutPrepareRequest userDto);

    String generatePassword();

    void setPassword(String token, String newPassword);

    void resetPassword(String token, String newPassword);
}
