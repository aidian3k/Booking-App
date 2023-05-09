package aidian3k.project.bookingappbackend.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Builder
public class UserDto {
    private Integer id;
    private String email;
    private String name;
    private String surname;
    private Date creationDate;
    private String phoneNumber;
}
