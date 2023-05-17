package aidian3k.project.bookingappbackend.service;

import aidian3k.project.bookingappbackend.entity.Booking;
import aidian3k.project.bookingappbackend.entity.Property;
import aidian3k.project.bookingappbackend.entity.User;
import aidian3k.project.bookingappbackend.repository.BookingRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.awt.print.Book;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {
    private final PropertyService propertyService;
    private final UserService userService;
    private final BookingRepository bookingRepository;

    public List<Booking> getAllUserBookings(Integer userId) {
        User user = userService.getSingleUserById(userId);

        return user.getBookings();
    }

    public Booking getSingleBooking(Long bookingId) {
        return bookingRepository.findById(bookingId).orElseThrow(() -> new NotFoundException(""));
    }

    public Booking saveSingleBooking(Booking booking) {
        return bookingRepository.save(booking);
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

    public void deleteSingleReservation(Long bookingId) {
        bookingRepository.delete(getSingleBooking(bookingId));
    }

    @Transactional
    public Booking createNewBooking(Booking booking, Integer userId, Long propertyId) {
        User reservationUser = userService.getSingleUserById(userId);
        Property property = propertyService.getPropertyFromRepository(propertyId);
        User hostUser = property.getUser();

        reservationUser.getBookings().add(booking);
        userService.saveSingleUser(reservationUser);
        propertyService.updateUserBookingProperty(booking, hostUser.getId(), propertyId);

        return saveSingleBooking(booking);
    }
}
