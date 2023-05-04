package aidian3k.project.bookingappbackend.repository;

import aidian3k.project.bookingappbackend.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}