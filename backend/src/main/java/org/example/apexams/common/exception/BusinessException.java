package org.example.apexams.common.exception;

// Бизнес-логика нарушена (лимит попыток, тест уже пройден и т.д.)
public class BusinessException extends RuntimeException {
    public BusinessException(String message) {
        super(message);
    }
}
