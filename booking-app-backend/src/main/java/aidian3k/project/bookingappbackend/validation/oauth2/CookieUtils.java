package aidian3k.project.bookingappbackend.validation.oauth2;

import com.nimbusds.jose.shaded.gson.Gson;
import jakarta.servlet.http.Cookie;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Base64;

@Component
public class CookieUtils {

    public Cookie buildRefreshTokenCookie(String refreshToken) {
        final String refreshTokenCookieName = "refreshToken";
        final int maxRefreshTokenCookieAge = 240;

        Cookie refreshTokenCookie = new Cookie(refreshTokenCookieName, refreshToken);
        refreshTokenCookie.setPath("/");
        refreshTokenCookie.setMaxAge(maxRefreshTokenCookieAge);
        refreshTokenCookie.setSecure(false);

        return refreshTokenCookie;
    }

    public Cookie buildAuthTokenCookie(String token) {
        final String tokenCookieName = "token";
        final int maxAuthTokenCookieAge = 240;

        Cookie tokenCookie = new Cookie(tokenCookieName, token);
        tokenCookie.setPath("/");
        tokenCookie.setMaxAge(maxAuthTokenCookieAge);
        tokenCookie.setSecure(false);
        tokenCookie.setHttpOnly(false);

        return tokenCookie;
    }

    public Cookie buildUserCookie(UserDetails principal) {
        final String userCookieName = "user";
        final int maxRefreshTokenCookieAge = 240;
        Gson gson = new Gson();
        String jsonString = gson.toJson(principal);
        String encodedString = Base64.getEncoder().encodeToString(jsonString.getBytes());

        Cookie userCookie = new Cookie(userCookieName, encodedString);
        userCookie.setPath("/");
        userCookie.setMaxAge(maxRefreshTokenCookieAge);
        userCookie.setSecure(false);

        return userCookie;
    }
}
