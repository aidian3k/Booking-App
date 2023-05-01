package aidian3k.project.bookingappbackend.exception;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
public abstract class AbstractException extends RuntimeException {
    private Integer errorStatus;
    private HttpStatus httpStatus;
    private String message;

    public AbstractException(String message, HttpStatus httpStatus) {
        super(message);
        this.errorStatus = httpStatus.value();
        this.httpStatus = httpStatus;
        this.message = message;
    }
}
