package org.example.apexams.common.exception;


// Ресурс не найден (Course, Module, Test и т.д.)
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
