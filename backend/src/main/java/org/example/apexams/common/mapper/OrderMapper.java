package org.example.apexams.common.mapper;

import org.example.apexams.orders.dto.OrderResponse;
import org.example.apexams.orders.entity.OrderEntity;
import org.springframework.stereotype.Component;

import static org.example.apexams.common.util.MoneyUtils.centsToDecimal;

@Component
public class OrderMapper {

    public OrderResponse mapToDto(OrderEntity order) {
        return new OrderResponse(
                order.getId(),
                order.getUser().getId(),
                order.getUser().getEmail(),
                order.getUser().getDiscordNickname(),
                order.getCourse().getId(),
                order.getCourse().getTitle(),
                order.getTariff().getId(),
                order.getTariff().getTier(),
                order.getPayProCheckoutId(),
                order.getPayProOrderId(),
                order.getStatus(),
                centsToDecimal(order.getAmountCents()),
                order.getCurrency(),
                order.getCreatedAt(),
                order.getCompletedAt()
        );
    }
}
