package aidian3k.project.bookingappbackend.config;

import aidian3k.project.bookingappbackend.exception.AbstractException;
import aidian3k.project.bookingappbackend.exception.ApiExceptionObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.ZonedDateTime;

@ControllerAdvice
public class ExceptionConfiguration {
    @ExceptionHandler
    public ResponseEntity<ApiExceptionObject> handleException(AbstractException throwable) {
        ApiExceptionObject apiExceptionObject = ApiExceptionObject.builder()
                .message(throwable.getMessage())
                .httpStatus(throwable.getHttpStatus())
                .numberStatus(throwable.getErrorStatus())
                .dateTime(ZonedDateTime.now())
                .throwable(throwable.getClass().getName())
                .build();

        return new ResponseEntity<>(apiExceptionObject, apiExceptionObject.getHttpStatus());
    }
}
