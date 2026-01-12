package org.example.apexams.email.service;

public interface EmailService {
    void sendPasswordEmail(String email, String password);

    void sendWelcomeEmail(String email, String courseName);

    void sendNewPasswordEmail(String email, String password);

    void sendPurchaseConfirmationEmail(String email, String courseName);
}
