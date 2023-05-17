package aidian3k.project.bookingappbackend.dto;

import aidian3k.project.bookingappbackend.entity.Photo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProfilePageBookingDto {
    private Long bookingId;
    private Date checkIn;
    private Date checkOut;
    private double totalPrice;
    private int numberOfGuests;
    private Photo photo;
    private Long propertyId;
    private String title;
    private Integer hostId;
}
