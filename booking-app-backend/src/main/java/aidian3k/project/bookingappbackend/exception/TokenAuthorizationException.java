package aidian3k.project.bookingappbackend.exception;

import org.springframework.http.HttpStatus;

public class TokenAuthorizationException extends AbstractException {
    public TokenAuthorizationException(String message, HttpStatus httpStatus) {
        super(message, httpStatus);
    }
}
