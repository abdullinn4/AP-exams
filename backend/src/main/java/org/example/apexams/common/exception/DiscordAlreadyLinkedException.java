package org.example.apexams.common.exception;

public class DiscordAlreadyLinkedException extends RuntimeException {
    public DiscordAlreadyLinkedException(String message) {
        super(message);
    }
}
