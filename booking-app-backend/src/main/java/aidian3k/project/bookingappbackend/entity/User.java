package aidian3k.project.bookingappbackend.entity;

import aidian3k.project.bookingappbackend.constants.Role;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Schema(description = "The table for storing the users used in application")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false, unique = true)
    private Integer id;

    @Schema(description = "Field for user's name")
    @Column(nullable = false)
    //@Pattern(regexp = "[A-Za-z]+", message = "Name must contain only letters")
    private String name;

    @Schema(description = "Field for user's surname")
    @Column(nullable = false)
    //@Pattern(regexp = "[A-Za-z]+", message = "Surname must contain only letters")
    private String surname;

    @Schema(description = "Field for user's login")
    @Column(nullable = false)
    //@Pattern(regexp = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", message = "Email must contain be valid")
    private String email;

    @Schema(description = "Field for user's phoneNumber assuming that it is Polish number", example = "728111321")
    @Column(length = 10, nullable = false)
    //@Pattern(regexp = "\"\\\\d{3}-\\\\d{3}-\\\\d{3}\"", message = "Email must contain be valid")
    private String phoneNumber;

    @Schema(description = "Field for user's password", example = "root")
    //@Pattern(regexp = "\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d)(?=.*[@$!%*?&])[A-Za-z\\\\d@$!%*?&]{8,}$\""
            //, message = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character")
    private String password;

    @Schema(description = "Field for storing user's creation date")
    @Column(nullable = false)
    private Date creationDate;

    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "user")
    private List<Token> tokens;

    @Override
    public boolean equals(Object comparedObject) {
        return comparedObject instanceof User
                && ((User) comparedObject).id.equals(this.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String getPassword() {
        return this.password;
    }
}
