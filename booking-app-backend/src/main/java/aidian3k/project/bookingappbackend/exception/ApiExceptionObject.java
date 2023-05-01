package aidian3k.project.bookingappbackend.exception;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import java.time.ZonedDateTime;

@Getter
@Setter
@Builder
public class ApiExceptionObject {
    String message;
    String throwable;
    HttpStatus httpStatus;
    Integer numberStatus;
    ZonedDateTime dateTime;
}
