package org.example.apexams.orders.service;

import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.users.entity.UserEntity;

public interface PaymentProvider {
    String createCheckoutSession(UserEntity user, CourseEntity course, TariffEntity tariff);

    void handleWebhook(String payload, String signature);
}
