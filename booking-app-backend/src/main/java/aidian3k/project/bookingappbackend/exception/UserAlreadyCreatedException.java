package aidian3k.project.bookingappbackend.exception;

import org.springframework.http.HttpStatus;

public class UserAlreadyCreatedException extends AbstractException {
    public UserAlreadyCreatedException(String message, HttpStatus httpStatus) {
        super(message, httpStatus);
    }
}
