package aidian3k.project.bookingappbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class MainPagePropertyDto {
    private Long id;
    private String title;
    private String description;
    private Integer pricePerNight;
    private Integer review;
    private String city;
    private String country;
    private Integer ownerId;
}
