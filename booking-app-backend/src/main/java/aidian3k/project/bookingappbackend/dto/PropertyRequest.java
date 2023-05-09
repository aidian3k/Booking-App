package aidian3k.project.bookingappbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class PropertyRequest {
    private PropertyDto propertyDto;
    private List<Long> photosId;
    private Integer userId;
}
