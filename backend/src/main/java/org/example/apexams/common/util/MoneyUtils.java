package org.example.apexams.common.util;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class MoneyUtils {

    private static final BigDecimal CENTS_IN_DOLLAR = BigDecimal.valueOf(100);

    /**
     * Конвертирует центы в доллары
     * @param cents сумма в центах (например, 9999)
     * @return сумма в долларах (например, 99.99)
     */
    public static BigDecimal centsToDecimal(Integer cents) {
        if (cents == null) {
            return BigDecimal.ZERO;
        }
        return BigDecimal.valueOf(cents)
                .divide(CENTS_IN_DOLLAR, 2, RoundingMode.HALF_UP);
    }

    /**
     * Конвертирует доллары в центы
     * @param amount сумма в долларах (например, 99.99)
     * @return сумма в центах (например, 9999)
     */
    public static Integer decimalToCents(BigDecimal amount) {
        if (amount == null) {
            return 0;
        }
        return amount.multiply(CENTS_IN_DOLLAR)
                .setScale(0, RoundingMode.HALF_UP)
                .intValue();
    }

    /**
     * Применяет скидку в процентах
     * @param priceCents исходная цена в центах
     * @param discountPercent процент скидки (10 = 10%)
     * @return финальная цена в центах после скидки
     */
    public static Integer applyDiscount(Integer priceCents, Integer discountPercent) {
        if (priceCents == null || discountPercent == null || discountPercent <= 0) {
            return priceCents;
        }

        BigDecimal price = BigDecimal.valueOf(priceCents);
        BigDecimal discount = BigDecimal.valueOf(discountPercent);
        BigDecimal multiplier = BigDecimal.ONE.subtract(
                discount.divide(BigDecimal.valueOf(100), 4, RoundingMode.HALF_UP)
        );

        return price.multiply(multiplier)
                .setScale(0, RoundingMode.HALF_UP)
                .intValue();
    }

    /**
     * Форматирует цену для отображения
     * @param cents цена в центах
     * @param currency валюта (USD, EUR, etc.)
     * @return отформатированная строка (например, "$99.99")
     */
    public static String formatPrice(Integer cents, String currency) {
        BigDecimal amount = centsToDecimal(cents);
        String symbol = getCurrencySymbol(currency);
        return String.format("%s%.2f", symbol, amount);
    }

    private static String getCurrencySymbol(String currency) {
        return switch (currency.toUpperCase()) {
            case "USD" -> "$";
            case "EUR" -> "€";
            case "GBP" -> "£";
            case "RUB" -> "₽";
            default -> currency + " ";
        };
    }
}
