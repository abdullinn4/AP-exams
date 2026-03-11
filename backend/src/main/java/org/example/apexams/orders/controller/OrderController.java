package org.example.apexams.orders.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.orders.dto.OrderItemResponse;
import org.example.apexams.orders.dto.OrdersByCheckoutResponse;
import org.example.apexams.orders.entity.OrderEntity;
import org.example.apexams.orders.entity.enums.OrderStatus;
import org.example.apexams.orders.repo.OrderRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/orders")
@RequiredArgsConstructor
@Slf4j
@Tag(name = "Orders", description = "Order management")
public class OrderController {

    private final OrderRepository orderRepository;

    @Operation(
            summary = "Get orders by checkout ID",
            description = "Retrieve all orders associated with a checkout session. Used by success page to display purchase details."
    )
    @GetMapping("/by-checkout/{checkoutId}")
    public ResponseEntity<OrdersByCheckoutResponse> getOrdersByCheckoutId(
            @PathVariable String checkoutId
    ) {
        log.info("Fetching orders for checkoutId: {}", checkoutId);

        List<OrderEntity> orders = orderRepository.findAllByPayProCheckoutId(checkoutId);

        if (orders.isEmpty()) {
            log.warn("No orders found for checkoutId: {}", checkoutId);
            return ResponseEntity.notFound().build();
        }

        // Определяем общий статус
        long completedCount = orders.stream()
                .filter(o -> o.getStatus() == OrderStatus.COMPLETED)
                .count();

        String overallStatus;
        if (completedCount == orders.size()) {
            overallStatus = "completed";
        } else if (completedCount > 0) {
            overallStatus = "partial";
        } else {
            overallStatus = "pending";
        }

        // Собираем данные
        List<OrderItemResponse> items = orders.stream()
                .map(order -> OrderItemResponse.builder()
                        .orderId(order.getId())
                        .courseId(order.getCourse().getId().toString())
                        .courseTitle(order.getCourse().getTitle())
                        .courseSlug(order.getCourse().getSlug())
                        .tariffId(order.getTariff().getId().toString())
                        .tariffTitle(order.getTariff().getTitle())
                        .tariffTier(order.getTariff().getTier().name())
                        .priceCents(order.getAmountCents() > 0 ? order.getAmountCents() : order.getTariff().getPriceCents())
                        .currency(order.getCurrency())
                        .status(order.getStatus().name())
                        .build())
                .toList();

        int totalAmountCents = items.stream()
                .mapToInt(OrderItemResponse::priceCents)
                .sum();

        OrdersByCheckoutResponse response = OrdersByCheckoutResponse.builder()
                .checkoutId(checkoutId)
                .userEmail(orders.getFirst().getUser().getEmail())
                .discordNickname(orders.getFirst().getUser().getDiscordNickname())
                .items(items)
                .overallStatus(overallStatus)
                .totalAmountCents(totalAmountCents)
                .currency(orders.getFirst().getCurrency())
                .build();

        log.info("Returning {} orders for checkoutId: {}, status: {}",
                orders.size(), checkoutId, overallStatus);

        return ResponseEntity.ok(response);
    }
}