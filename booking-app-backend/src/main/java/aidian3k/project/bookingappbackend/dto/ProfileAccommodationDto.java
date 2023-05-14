package aidian3k.project.bookingappbackend.dto;

import aidian3k.project.bookingappbackend.entity.Photo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class ProfileAccommodationDto {
    private Long id;
    private String title;
    private String description;
    private String extraInformation;
    private String country;
    private Integer pricePerNight;
    private String street;
    private String city;
    private Photo photo;
}
