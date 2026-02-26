package org.example.apexams.common.exception;

import lombok.Getter;
import org.example.apexams.tests.dto.StartTestResponse;

@Getter
public class ActiveAttemptExistsException extends RuntimeException {
    private final StartTestResponse existingAttempt;

    public ActiveAttemptExistsException(String message, StartTestResponse existingAttempt) {
        super(message);
        this.existingAttempt = existingAttempt;
    }
}
