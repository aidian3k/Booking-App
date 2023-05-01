package aidian3k.project.bookingappbackend.exception;

import org.springframework.http.HttpStatus;

public class UserNotFoundException extends AbstractException {
    public UserNotFoundException(String message, HttpStatus httpStatus) {
        super(message, httpStatus);
    }
}
