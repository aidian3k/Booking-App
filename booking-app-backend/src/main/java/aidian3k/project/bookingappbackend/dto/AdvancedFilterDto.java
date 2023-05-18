package aidian3k.project.bookingappbackend.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AdvancedFilterDto {
    private int minimalPrice;
    private int maximalPrice;
    private int numberOfBeds;
    private int numberOfBedrooms;
    private List<MainPagePropertyDto> propertyDtoList;
}
