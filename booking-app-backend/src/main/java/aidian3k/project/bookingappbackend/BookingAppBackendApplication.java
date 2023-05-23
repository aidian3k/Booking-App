package aidian3k.project.bookingappbackend;

import aidian3k.project.bookingappbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
@RequiredArgsConstructor
@Slf4j
public class BookingAppBackendApplication {
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		log.info("The application has started!");
		SpringApplication.run(BookingAppBackendApplication.class, args);
	}
}
