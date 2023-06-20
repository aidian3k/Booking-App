package aidian3k.project.bookingappbackend.validation.oauth2;

import aidian3k.project.bookingappbackend.security.TokenProvider;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class OAuthSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final CookieUtils cookieUtils;
    private final TokenProvider tokenProvider;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
        handle(request, response, authentication);
        super.clearAuthenticationAttributes(request);
    }

    @Override
    protected void handle(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
        final String targetUrl = "http://localhost:3000/oauth2/react/login";

        String token = tokenProvider.generateShortToken((UserDetails) authentication.getPrincipal());
        String refreshToken = tokenProvider.generateRefreshToken((UserDetails) authentication.getPrincipal());

        response.addCookie(cookieUtils.buildAuthTokenCookie(token));
        response.addCookie(cookieUtils.buildRefreshTokenCookie(refreshToken));
        response.addCookie(cookieUtils.buildUserCookie((UserDetails) authentication.getPrincipal()));

        response.sendRedirect(targetUrl);
    }
}
