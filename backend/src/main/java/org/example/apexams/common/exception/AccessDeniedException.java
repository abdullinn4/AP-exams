package org.example.apexams.common.exception;

// Доступ запрещён (нет enrollment, недостаточный tier)
public class AccessDeniedException extends RuntimeException {
    public AccessDeniedException(String message) {
        super(message);
    }
}
