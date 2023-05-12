package aidian3k.project.bookingappbackend.dto;

import aidian3k.project.bookingappbackend.entity.Property;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class SinglePropertyPageDto {
    private Property property;
    private UserDto userDto;
}
