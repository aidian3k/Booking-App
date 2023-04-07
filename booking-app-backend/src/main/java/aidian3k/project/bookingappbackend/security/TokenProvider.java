package aidian3k.project.bookingappbackend.security;

import aidian3k.project.bookingappbackend.constants.JwtConstants;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@Slf4j
@RequiredArgsConstructor
public class TokenProvider {
    private final JwtConstants jwtConstants;

    public String generateToken(UserDetails userDetails) {
        Date nowDate = new Date();
        Date expiryTokenDate = new Date(nowDate.getTime() + jwtConstants.getTokenExpirationTimeInMillisecs());

        return Jwts.builder()
                .setSubject(String.valueOf(userDetails.getUsername()))
                .setIssuedAt(nowDate)
                .setExpiration(expiryTokenDate)
                .signWith(SignatureAlgorithm.HS512, jwtConstants.getTokenSecret())
                .compact();
    }
}
