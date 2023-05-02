package aidian3k.project.bookingappbackend.exception;

import org.springframework.http.HttpStatus;

public class InvalidLoginInfoException extends AbstractException{
    public InvalidLoginInfoException(String message, HttpStatus httpStatus) {
        super(message, httpStatus);
    }
}
