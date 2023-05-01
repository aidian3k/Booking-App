package aidian3k.project.bookingappbackend.security;

import aidian3k.project.bookingappbackend.config.AuthenticationConfiguration;
import aidian3k.project.bookingappbackend.entity.Token;
import aidian3k.project.bookingappbackend.exception.TokenAuthorizationException;
import aidian3k.project.bookingappbackend.repository.TokenRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
@Slf4j
public class TokenAuthenticationFilter extends OncePerRequestFilter {
    private final TokenRepository tokenRepository;
    private final TokenProvider tokenProvider;
    private final AuthenticationConfiguration authenticationConfiguration;

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull FilterChain filterChain) throws ServletException, IOException {
        final String authenticationHeader = request.getHeader("Authorization");
        final String jwtToken;
        final int headerLength = 7;

        if (authenticationHeader == null || !authenticationHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        jwtToken = authenticationHeader.substring(headerLength);
        String userName = tokenProvider.extractSubjectFromToken(jwtToken);

        if (userName != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = authenticationConfiguration.userDetailsService().loadUserByUsername(userName);

            if (tokenProvider.validateToken(jwtToken, userDetails) && !isTokenRevokedOrExpired(jwtToken)) {
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } else {
            throw new IllegalStateException("Something is wrong with the jwtToken");
        }

        filterChain.doFilter(request, response);
    }

    private boolean isTokenRevokedOrExpired(String jwtToken) {
        Token token = tokenRepository.findByToken(jwtToken).orElseThrow(() -> new IllegalStateException("No token present exception!"));

        if (token.isExpired() || token.isRevoked()) {
            throw new TokenAuthorizationException("There is expired or revoke key! Token: %s".formatted(token.getToken()), HttpStatus.UNAUTHORIZED);
        }

        return false;
    }
}
