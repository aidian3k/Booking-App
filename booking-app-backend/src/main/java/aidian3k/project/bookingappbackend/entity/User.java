package aidian3k.project.bookingappbackend.entity;

import aidian3k.project.bookingappbackend.constants.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.ZonedDateTime;
import java.util.Collection;
import java.util.List;

@Entity(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "The table for storing the users used in application")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", nullable = false, unique = true)
    private Long id;

    @Schema(description = "Field for user's name")
    @Column(nullable = false)
    private String name;

    @Schema(description = "Field for user's surname")
    @Column(nullable = false)
    private String surname;

    @Schema(description = "Field for user's login")
    @Column(nullable = false)
    private String login;

    @Schema(description = "Field for user's phoneNumber assuming that it is Polish number", example = "728111321")
    @Column(length = 10, nullable = false)
    private String phoneNumber;

    @Schema(description = "Field for user's password", example = "root")
    private String password;

    @Schema(description = "Field for storing user's creation date")
    @Column(nullable = false)
    private ZonedDateTime creationDate;

    @Enumerated(EnumType.STRING)
    @JsonIgnore
    private Role role;

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
        return this.login;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
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
