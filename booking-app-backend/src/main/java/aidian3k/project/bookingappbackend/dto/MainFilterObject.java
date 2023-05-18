package aidian3k.project.bookingappbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class MainFilterObject {
    private String place;
    private Date arrival;
    private Date department;
    private int numberOfGuests;
}
