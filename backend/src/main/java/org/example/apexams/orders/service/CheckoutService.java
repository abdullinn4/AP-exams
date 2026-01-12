package org.example.apexams.orders.service;

import org.example.apexams.orders.dto.CheckoutResponse;
import org.example.apexams.users.dto.CheckoutPrepareRequest;

public interface CheckoutService {
    CheckoutResponse prepareCheckout(CheckoutPrepareRequest request);
}
