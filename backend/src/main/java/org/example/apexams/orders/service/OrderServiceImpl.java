package org.example.apexams.orders.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.common.mapper.OrderMapper;
import org.example.apexams.orders.dto.OrderResponse;
import org.example.apexams.orders.entity.OrderEntity;
import org.example.apexams.orders.entity.enums.OrderStatus;
import org.example.apexams.orders.repo.OrderRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;

    @Override
    @Transactional(readOnly = true)
    public OrderResponse getOrder(UUID orderId) {
        OrderEntity order = findOrderByIdOrThrow(orderId);
        return orderMapper.mapToDto(order);
    }

    @Override
    @Transactional(readOnly = true)
    public List<OrderResponse> getAllOrders() {
        return orderRepository.findAll()
                .stream()
                .map(orderMapper::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<OrderResponse> getOrdersByUser(UUID userId) {
        return orderRepository.findAll()
                .stream()
                .filter(order -> order.getUser().getId().equals(userId))
                .map(orderMapper::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<OrderResponse> getOrdersByCourse(UUID courseId) {
        return orderRepository.findAll()
                .stream()
                .filter(order -> order.getCourse().getId().equals(courseId))
                .map(orderMapper::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<OrderResponse> getOrdersByStatus(OrderStatus status) {
        return orderRepository.findAll()
                .stream()
                .filter(order -> order.getStatus() == status)
                .map(orderMapper::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public void refundOrder(UUID orderId) {
        OrderEntity order = findOrderByIdOrThrow(orderId);

        if (order.getStatus() != OrderStatus.COMPLETED) {
            throw new IllegalStateException("Only completed orders can be refunded");
        }

        order.setStatus(OrderStatus.REFUNDED);
        orderRepository.save(order);

        log.info("Order refunded: orderId={}, userId={}", orderId, order.getUser().getId());
    }

    private OrderEntity findOrderByIdOrThrow(UUID orderId) {
        return orderRepository.findById(orderId)
                .orElseThrow(() -> new IllegalArgumentException("Order not found: " + orderId));
    }

}