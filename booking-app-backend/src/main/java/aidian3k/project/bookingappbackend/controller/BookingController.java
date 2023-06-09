package aidian3k.project.bookingappbackend.controller;

import aidian3k.project.bookingappbackend.dto.BookingPageDto;
import aidian3k.project.bookingappbackend.dto.ProfilePageBookingDto;
import aidian3k.project.bookingappbackend.entity.Booking;
import aidian3k.project.bookingappbackend.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/booking")
@RequiredArgsConstructor
public class BookingController {
    private final BookingService bookingService;

    @PostMapping("/user/{userId}/property/{propertyId}")
    public Booking createNewBooking(@RequestBody Booking booking, @PathVariable Integer userId, @PathVariable Long propertyId) {
        return bookingService.createNewBooking(booking, userId, propertyId);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Booking>> getAllUserBookings(@PathVariable Integer userId) {
        return new ResponseEntity<>(bookingService.getAllUserBookings(userId), HttpStatus.OK);
    }

    @GetMapping("/profile/user/{userId}")
    public ResponseEntity<BookingPageDto> getProfilePageBookingsInformation(@PathVariable Integer userId) {
        return new ResponseEntity<>(bookingService.getProfilePageBookingInformation(userId), HttpStatus.OK);
    }

    @GetMapping("/profile/property/reservation/user/{userId}")
    public ResponseEntity<List<ProfilePageBookingDto>> getProfilePageReservations(@PathVariable Integer userId) {
        return new ResponseEntity<>(bookingService.getProfilePageReservations(userId), HttpStatus.OK);
    }

    @DeleteMapping("/{bookingId}")
    public void deleteReservation(@PathVariable Long bookingId) {
        bookingService.deleteSingleReservation(bookingId);
    }
}
