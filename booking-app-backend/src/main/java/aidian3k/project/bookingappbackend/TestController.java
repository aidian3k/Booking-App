package aidian3k.project.bookingappbackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("test")
    public String testEndPoint() {
        return "Working!";
    }
}
