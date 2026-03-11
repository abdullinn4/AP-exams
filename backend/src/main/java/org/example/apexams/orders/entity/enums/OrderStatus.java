package org.example.apexams.orders.entity.enums;

public enum OrderStatus {
    PENDING,      // Заказ создан, ожидает оплаты
    COMPLETED,    // Оплата успешна
    FAILED,       // Оплата не прошла
    REFUNDED,     // Возврат средств
    CHARGEBACK    // Chargeback от банка
}
