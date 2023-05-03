package aidian3k.project.bookingappbackend;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@Slf4j
public class BookingAppBackendApplication {
	public static void main(String[] args) {
		log.info("The application has started!");
		SpringApplication.run(BookingAppBackendApplication.class, args);
	}
}
