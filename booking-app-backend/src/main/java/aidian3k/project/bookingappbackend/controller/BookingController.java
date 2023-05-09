package aidian3k.project.bookingappbackend.controller;

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

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Booking>> getAllUserBookings(@PathVariable Integer userId) {
        return new ResponseEntity<>(bookingService.getAllUserBookings(userId), HttpStatus.OK);
    }

    @GetMapping("/profile/{userId}")
    public ResponseEntity<List<Booking>> getProfilePageReservations(@PathVariable Integer userId) {
        return new ResponseEntity<>(bookingService.getProfilePageReservations(userId), HttpStatus.OK);
    }

    @DeleteMapping("/{bookingId}/user/{userId}")
    public void deleteUserReservation(@PathVariable Long bookingId, @PathVariable Integer userId) {
        bookingService.deleteUserReservation(bookingId, userId);
    }

    @DeleteMapping("/{bookingId}")
    public void deleteReservation(@PathVariable Long bookingId, @PathVariable Integer userId) {
        bookingService.deleteReservation(bookingId, userId);
    }
}
