package aidian3k.project.bookingappbackend.dto;

import lombok.*;

@RequiredArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class PropertyDto {
    private String title;
    private String country;
    private String city;
    private String street;
    private String description;
    private boolean wifi;
    private boolean placeToWork;
    private boolean pool;
    private boolean allowedAnimals;
    private boolean kitchen;
    private boolean airConditioning;
    private boolean gasMeter;
    private boolean washingMachine;
    private String extraInformation;
    private int numberOfGuests;
    private int numberOfBedrooms;
    private int numberOfBeds;
    private int cleaningFee;
    private int price;
}
