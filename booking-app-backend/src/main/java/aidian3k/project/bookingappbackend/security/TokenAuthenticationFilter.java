package aidian3k.project.bookingappbackend.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
@Slf4j
public class TokenAuthenticationFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

    }

    private String getJwtFromRequest(HttpServletRequest request, FilterChain filterChain, HttpServletResponse servletResponse) throws ServletException, IOException {
        final String authenticationHeader = request.getHeader("Autherization");
        final String jwt;
        final int headerLength = 7;

        if (authenticationHeader == null || !authenticationHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, servletResponse);
            throw new IllegalStateException("The state of the jwt header is not valid!");
        }

        jwt = authenticationHeader.substring(headerLength);
        return null;
    }
}
