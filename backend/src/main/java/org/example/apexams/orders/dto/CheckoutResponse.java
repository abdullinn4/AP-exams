package org.example.apexams.orders.dto;

import java.util.UUID;

public record CheckoutResponse(
        UUID orderId,
        String stripeCheckoutUrl
) {
}
