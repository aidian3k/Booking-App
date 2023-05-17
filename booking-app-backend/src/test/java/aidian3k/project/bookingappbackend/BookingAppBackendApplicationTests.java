package aidian3k.project.bookingappbackend;

import aidian3k.project.bookingappbackend.entity.User;
import aidian3k.project.bookingappbackend.repository.UserRepository;
import aidian3k.project.bookingappbackend.service.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.Mockito.when;

@SpringBootTest
class BookingAppBackendApplicationTests {
	@Mock
	private UserRepository userRepository;

	@InjectMocks
	private UserService userService;

	@Test
	void contextLoads() {
		User user = new User();
		when(userRepository.save(user)).thenReturn(user);
		userService.saveSingleUser(user);
		System.out.println(userRepository.findAll().size());
	}

}
