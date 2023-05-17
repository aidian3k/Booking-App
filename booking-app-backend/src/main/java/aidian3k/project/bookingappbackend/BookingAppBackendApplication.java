package aidian3k.project.bookingappbackend;

import aidian3k.project.bookingappbackend.constants.Role;
import aidian3k.project.bookingappbackend.entity.User;
import aidian3k.project.bookingappbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Date;

@SpringBootApplication
@RequiredArgsConstructor
@Slf4j
public class BookingAppBackendApplication implements CommandLineRunner {
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		log.info("The application has started!");
		SpringApplication.run(BookingAppBackendApplication.class, args);
	}


	@Override
	public void run(String... args) {
		User user = User.builder().name("Adrian").surname("Nowosielski").email("adrian@pw.pl")
				.creationDate(new Date()).phoneNumber("728221243").role(Role.USER).password(passwordEncoder.encode("adrian"))
				.build();

		User user1 = User.builder().name("Kuba").surname("Orzełowski").email("kuba@pw.pl")
				.creationDate(new Date()).phoneNumber("728221222").role(Role.USER).password(passwordEncoder.encode("kuba"))
				.build();

		userRepository.save(user);
		userRepository.save(user1);
		log.info("Created new user in repository");
	}
}
