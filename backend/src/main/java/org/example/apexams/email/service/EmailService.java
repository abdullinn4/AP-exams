package org.example.apexams.email.service;

import java.util.List;

public interface EmailService {
    void sendPasswordEmail(String email, String password);

    void sendWelcomeEmail(String email, String courseName);

    void sendNewPasswordEmail(String email, String password);
    void sendPurchaseConfirmationEmail(String email, List<String> courseNames);
    void sendPartnershipNotification(String email);
    void sendFreeMaterial(String email, String materialSlug);
}
