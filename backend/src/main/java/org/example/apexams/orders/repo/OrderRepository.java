package org.example.apexams.orders.repo;

import org.example.apexams.orders.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface OrderRepository extends JpaRepository<OrderEntity, UUID> {

    //Методы для множественных orders
    List<OrderEntity> findAllByLemonSqueezyCheckoutId(String checkoutId);

    List<OrderEntity> findAllByLemonSqueezyOrderId(String orderId);

}
