package aidian3k.project.bookingappbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class BookingPageDto {
    List<ProfilePageBookingDto> currentBookings;
    List<ProfilePageBookingDto> historyBookings;
}
