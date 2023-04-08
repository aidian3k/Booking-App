package aidian3k.project.bookingappbackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @ResponseStatus(HttpStatus.ACCEPTED)
    @GetMapping("/")
    public String test() {
        return "Hello";
    }

    @GetMapping("http://localhost:8080/login/oauth2/code/google")
    public String testEndPoint() {
        return "hello";
    }
}
