package org.example.apexams.orders.dto;

public record CheckoutResponse(
        String checkoutId,
        String payProCheckoutUrl
) {
}
