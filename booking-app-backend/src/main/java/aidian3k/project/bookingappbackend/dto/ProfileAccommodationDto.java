package aidian3k.project.bookingappbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ProfileAccommodationDto {
    private Long id;
    private String title;
    private String description;
}
