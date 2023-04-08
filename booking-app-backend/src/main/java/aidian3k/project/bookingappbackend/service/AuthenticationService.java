package aidian3k.project.bookingappbackend.service;

import aidian3k.project.bookingappbackend.constants.Role;
import aidian3k.project.bookingappbackend.entity.Token;
import aidian3k.project.bookingappbackend.entity.User;
import aidian3k.project.bookingappbackend.repository.TokenRepository;
import aidian3k.project.bookingappbackend.repository.UserRepository;
import aidian3k.project.bookingappbackend.security.TokenProvider;
import aidian3k.project.bookingappbackend.validation.AuthenticationRequest;
import aidian3k.project.bookingappbackend.validation.AuthenticationResponse;
import aidian3k.project.bookingappbackend.validation.RegisterModel;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Date;
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
        User createdUser = User.builder().name(registerModel.getName()).surname(registerModel.getSurname()).email(registerModel.getEmail()).phoneNumber(registerModel.getPhoneNumber()).password(passwordEncoder.encode(registerModel.getPassword())).role(Role.USER).creationDate(new Date()).build();

        userRepository.save(createdUser);
        final String jwtToken = tokenProvider.generateShortToken(createdUser);
        final String refreshToken = tokenProvider.generateRefreshToken(createdUser);

        return AuthenticationResponse.builder().token(jwtToken).refreshToken(refreshToken).requestDate(new Date()).build();
    }

    public AuthenticationResponse authenticateRequest(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));

        User user = userRepository.findByEmail(authenticationRequest.getEmail()).orElseThrow(IllegalArgumentException::new);
        final String jwtToken = tokenProvider.generateShortToken(user);
        final String refreshToken = tokenProvider.generateRefreshToken(user);

        return AuthenticationResponse.builder().token(jwtToken).refreshToken(refreshToken).requestDate(new Date()).build();
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

                AuthenticationResponse authResponse = AuthenticationResponse.builder().token(accessToken).refreshToken(refreshToken).build();

                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
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
