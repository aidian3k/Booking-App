package aidian3k.project.bookingappbackend.security;


import aidian3k.project.bookingappbackend.constants.JwtConstants;
import aidian3k.project.bookingappbackend.exception.TokenAuthorizationException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;

@Service
@Slf4j
@RequiredArgsConstructor
public class TokenProvider {
    private final JwtConstants jwtConstants;

    private String generateToken(UserDetails userDetails, long expirationTime) {
        Date nowDate = new Date();
        Date expiryTokenDate = new Date(nowDate.getTime() + expirationTime);

        return Jwts.builder()
                .setClaims(new HashMap<>())
                .setSubject(userDetails.getUsername())
                .setIssuedAt(nowDate)
                .setExpiration(expiryTokenDate)
                .signWith(SignatureAlgorithm.HS256, getSignInKey())
                .compact();
    }

    public String generateShortToken(UserDetails userDetails) {
        return generateToken(userDetails, jwtConstants.getTokenExpirationTimeInMillisecond());
    }

    public String generateRefreshToken(UserDetails userDetails) {
        return generateToken(userDetails, jwtConstants.getRefreshTokenExpirationTimeInMillisecond());
    }

    public String extractSubjectFromToken(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(jwtConstants.getTokenSecret())
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

    public boolean validateToken(String authorizedToken, UserDetails userDetails) {
        try {
            Claims claims = Jwts.parser().setSigningKey(jwtConstants.getTokenSecret()).parseClaimsJws(authorizedToken).getBody();

            Date expirationDate = claims.getExpiration();
            String userName = extractSubjectFromToken(authorizedToken);

            if (expirationDate.before(new Date()) && userName.equals(userDetails.getUsername())) {
                throw new TokenAuthorizationException("Token expiration date exception! Token: %s".formatted(authorizedToken), HttpStatus.UNAUTHORIZED);
            }

            return true;
        } catch (TokenAuthorizationException exception) {
            throw new TokenAuthorizationException("Invalid jwt token authorization! Token: %s".formatted(authorizedToken), HttpStatus.UNAUTHORIZED);
        }
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(jwtConstants.getTokenSecret());
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
