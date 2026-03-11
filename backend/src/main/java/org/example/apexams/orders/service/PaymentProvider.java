package org.example.apexams.orders.service;

import org.example.apexams.courses.entity.CourseEntity;
import org.example.apexams.tariffs.entity.TariffEntity;
import org.example.apexams.users.entity.UserEntity;

import java.util.List;

public interface PaymentProvider {
    String createCheckoutSession(UserEntity user, List<TariffEntity> tariffs, String checkoutId);

    void handleWebhook(String payload, String signature);
}
