package aidian3k.project.bookingappbackend.validation;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Builder
public class UserDto {
    private String email;
    private String name;
    private String surname;
    private Date creationDate;
    private String phoneNumber;
}
