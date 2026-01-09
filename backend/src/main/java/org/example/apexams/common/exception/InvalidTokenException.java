package org.example.apexams.common.exception;

// Невалидный или истёкший JWT токен
public class InvalidTokenException extends RuntimeException {
    public InvalidTokenException(String message) {
        super(message);
    }
}
