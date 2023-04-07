package aidian3k.project.bookingappbackend.security;


import aidian3k.project.bookingappbackend.constants.JwtConstants;
import aidian3k.project.bookingappbackend.exception.TokenAuthorizationException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

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
                .signWith(SignatureAlgorithm.HS256, jwtConstants.getTokenSecret())
                .compact();
    }

    public String generateShortToken(UserDetails userDetails) {
        return generateToken(userDetails, jwtConstants.getTokenExpirationTimeInMillisecs());
    }

    public String generateRefreshToken(UserDetails userDetails) {
        return generateToken(userDetails, jwtConstants.getRefreshTokenExpirationTimeInMillisecs());
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
                throw new TokenAuthorizationException("Token expiration date exception", authorizedToken);
            }

            return true;
        } catch (TokenAuthorizationException exception) {
            log.error("Invalid jwt token authorization");
            throw new TokenAuthorizationException("Invalid jwt token authorization", authorizedToken);
        }
    }
}
