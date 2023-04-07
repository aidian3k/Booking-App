package aidian3k.project.bookingappbackend.validation;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterModel {
    private String name;
    private String surname;
    private String phoneNumber;
    private String email;
    private String password;
}
