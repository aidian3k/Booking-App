package aidian3k.project.bookingappbackend.service;

import aidian3k.project.bookingappbackend.constants.Role;
import aidian3k.project.bookingappbackend.entity.Token;
import aidian3k.project.bookingappbackend.entity.User;
import aidian3k.project.bookingappbackend.exception.InvalidLoginInfoException;
import aidian3k.project.bookingappbackend.exception.UserAlreadyCreatedException;
import aidian3k.project.bookingappbackend.exception.UserNotFoundException;
import aidian3k.project.bookingappbackend.repository.TokenRepository;
import aidian3k.project.bookingappbackend.repository.UserRepository;
import aidian3k.project.bookingappbackend.security.TokenProvider;
import aidian3k.project.bookingappbackend.validation.AuthenticationRequest;
import aidian3k.project.bookingappbackend.validation.AuthenticationResponse;
import aidian3k.project.bookingappbackend.validation.RegisterModel;
import aidian3k.project.bookingappbackend.validation.UserDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Date;
import java.util.HashSet;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;
    private final AuthenticationManager authenticationManager;
    private final TokenRepository tokenRepository;

    public AuthenticationResponse registerUser(RegisterModel registerModel) {
        User createdUser = User.builder()
                .name(registerModel.getName())
                .surname(registerModel.getSurname())
                .email(registerModel.getEmail())
                .phoneNumber(registerModel.getPhoneNumber())
                .password(passwordEncoder.encode(registerModel.getPassword()))
                .role(Role.USER)
                .creationDate(new Date()).build();

        checkIfUserAlreadyExist(createdUser);

        userRepository.save(createdUser);
        final String jwtToken = tokenProvider.generateShortToken(createdUser);
        final String refreshToken = tokenProvider.generateRefreshToken(createdUser);

        saveUserToken(createdUser, jwtToken);

        return AuthenticationResponse.builder().token(jwtToken).refreshToken(refreshToken).requestDate(new Date()).build();
    }

    public AuthenticationResponse authenticateRequest(AuthenticationRequest authenticationRequest) {
        authenticateUserCredentials(authenticationRequest);

        User user = userRepository.findByEmail(authenticationRequest.getEmail())
                .orElseThrow(() ->
                        new UserNotFoundException("User with email: %s has not been found".formatted(authenticationRequest.getEmail()), HttpStatus.NOT_FOUND));

        final String jwtToken = tokenProvider.generateShortToken(user);
        final String refreshToken = tokenProvider.generateRefreshToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, jwtToken);
        UserDto userDto = UserDto.builder().name(user.getName()).surname(user.getSurname()).phoneNumber(user.getPhoneNumber()).email(user.getEmail()).creationDate(user.getCreationDate()).build();

        return AuthenticationResponse.builder().token(jwtToken).refreshToken(refreshToken).requestDate(new Date()).user(userDto).build();
    }

    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        final String authenticationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String userEmail;

        if (authenticationHeader == null || !authenticationHeader.startsWith("Bearer ")) {
            return;
        }

        refreshToken = authenticationHeader.substring(7);
        userEmail = tokenProvider.extractSubjectFromToken(refreshToken);

        if (userEmail != null) {
            User user = this.userRepository.findByEmail(userEmail).orElseThrow();

            if (tokenProvider.validateToken(refreshToken, user)) {
                String accessToken = tokenProvider.generateShortToken(user);

                revokeAllUserTokens(user);
                saveUserToken(user, accessToken);

                AuthenticationResponse authResponse = AuthenticationResponse.builder().token(accessToken).refreshToken(refreshToken).requestDate(new Date()).build();

                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }

    private void authenticateUserCredentials(AuthenticationRequest authenticationRequest) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail()
                            , authenticationRequest.getPassword(), new HashSet<>())
            );
        } catch(Exception exception) {
            throw new InvalidLoginInfoException("Invalid login information given while authenticating!", HttpStatus.NOT_ACCEPTABLE);
        }
    }

    private void checkIfUserAlreadyExist(User createdUser) {
        List<User> users = userRepository.findAll();
        boolean isUserRegistered = users.stream().anyMatch(user -> user.getEmail().equals(createdUser.getEmail()));

        if (isUserRegistered) {
            throw new UserAlreadyCreatedException("User already exists in Application", HttpStatus.CONFLICT);
        }
    }

    private Token saveUserToken(User user, String token) {
        Token savedEntity = Token.builder().isExpired(false).isRevoked(false).token(token).user(user).build();
        tokenRepository.save(savedEntity);

        return savedEntity;
    }

    private void revokeAllUserTokens(User user) {
        List<Token> validUserTokens = tokenRepository.findAllValidUserTokens(user.getId());
        validUserTokens.forEach(token -> {
            token.setRevoked(true);
            token.setExpired(true);
        });

        tokenRepository.saveAll(validUserTokens);
    }

}

