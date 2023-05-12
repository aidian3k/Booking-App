package aidian3k.project.bookingappbackend.dto;

import aidian3k.project.bookingappbackend.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private Integer id;
    private String email;
    private String name;
    private String surname;
    private Date creationDate;
    private String phoneNumber;

    public UserDto(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.name = user.getName();
        this.surname = user.getSurname();
        this.creationDate = user.getCreationDate();
        this.phoneNumber = user.getPhoneNumber();
    }
}
