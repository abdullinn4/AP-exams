package org.example.apexams.orders.repo;

import org.example.apexams.orders.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface OrderRepository extends JpaRepository<OrderEntity, UUID> {
    Optional<OrderEntity> findByLemonSqueezyCheckoutId(String lemonSqueezyCheckoutId);

    Optional<OrderEntity> findByLemonSqueezyOrderId(String lemonSqueezyOrderId);
}
