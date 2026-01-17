package org.example.apexams.orders.service;

import org.example.apexams.orders.dto.OrderResponse;
import org.example.apexams.orders.entity.enums.OrderStatus;

import java.util.List;
import java.util.UUID;

public interface OrderService {
    OrderResponse getOrder(UUID orderId);

    List<OrderResponse> getAllOrders();

    List<OrderResponse> getOrdersByUser(UUID userId);

    List<OrderResponse> getOrdersByCourse(UUID courseId);

    List<OrderResponse> getOrdersByStatus(OrderStatus status);

    void refundOrder(UUID orderId);
}
