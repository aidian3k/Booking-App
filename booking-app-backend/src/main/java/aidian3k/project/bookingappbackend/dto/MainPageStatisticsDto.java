package aidian3k.project.bookingappbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class MainPageStatisticsDto {
    private int bookedProperties;
    private int currentlyOwnedProperties;
    private int writtenReviews;
}
