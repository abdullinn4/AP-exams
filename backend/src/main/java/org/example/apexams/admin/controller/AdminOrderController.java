package org.example.apexams.admin.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.apexams.orders.dto.OrderResponse;
import org.example.apexams.orders.entity.enums.OrderStatus;
import org.example.apexams.orders.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/admin/orders")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Admin - Orders", description = "Order and payment management for administrators")
public class AdminOrderController {
    private final OrderService orderService;

    @Operation(summary = "Get all orders")
    @GetMapping
    public ResponseEntity<List<OrderResponse>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @Operation(summary = "Get order by ID")
    @GetMapping("/{id}")
    public ResponseEntity<OrderResponse> getOrder(
            @Parameter(description = "Order ID") @PathVariable UUID id) {
        return ResponseEntity.ok(orderService.getOrder(id));
    }

    @Operation(summary = "Get orders by user")
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<OrderResponse>> getOrdersByUser(
            @Parameter(description = "User ID") @PathVariable UUID userId) {
        return ResponseEntity.ok(orderService.getOrdersByUser(userId));
    }

    @Operation(summary = "Get orders by course")
    @GetMapping("/course/{courseId}")
    public ResponseEntity<List<OrderResponse>> getOrdersByCourse(
            @Parameter(description = "Course ID") @PathVariable UUID courseId) {
        return ResponseEntity.ok(orderService.getOrdersByCourse(courseId));
    }

    @Operation(summary = "Get orders by status", description = "Filter orders by status (PENDING, COMPLETED, FAILED, REFUNDED)")
    @GetMapping("/status/{status}")
    public ResponseEntity<List<OrderResponse>> getOrdersByStatus(
            @Parameter(description = "Order status") @PathVariable OrderStatus status) {
        return ResponseEntity.ok(orderService.getOrdersByStatus(status));
    }

    @Operation(summary = "Refund order", description = "Process refund via Stripe and update order status")
    @PostMapping("/{id}/refund")
    public ResponseEntity<Void> refundOrder(
            @Parameter(description = "Order ID") @PathVariable UUID id) {
        orderService.refundOrder(id);
        return ResponseEntity.ok().build();
    }
}
