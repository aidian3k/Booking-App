package aidian3k.project.bookingappbackend.service;

import aidian3k.project.bookingappbackend.entity.Booking;
import aidian3k.project.bookingappbackend.entity.Property;
import aidian3k.project.bookingappbackend.entity.User;
import aidian3k.project.bookingappbackend.repository.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {
    private final UserService userService;
    private final BookingRepository bookingRepository;

    public List<Booking> getAllUserBookings(Integer userId) {
        User user = userService.getSingleUserById(userId);

        return user.getBookings();
    }

    public List<Booking> getProfilePageReservations(Integer userId) {
        User user = userService.getSingleUserById(userId);
        List<Property> properties = user.getProperties();
        List<Booking> profileBookings = new ArrayList<>();

        for (Property property : properties) {
            List<Booking> bookings = property.getBookings();
            profileBookings.addAll(bookings);
        }

        return profileBookings;
    }

    public void deleteUserReservation(Long bookingId, Integer userId) {
        User user = userService.getSingleUserById(userId);
        Booking booking = user.getBookings().stream()
                .filter(foundBooking -> foundBooking.getId().equals(bookingId))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);

        bookingRepository.delete(booking);
    }

    public void deleteReservation(Long bookingId, Integer userId) {
        List<Booking> bookings = getProfilePageReservations(userId);
        Booking booking = bookings.stream()
                .filter(foundBooking -> foundBooking.getId().equals(bookingId))
                .findAny().orElseThrow(IllegalArgumentException::new);

        bookingRepository.delete(booking);
    }
}
