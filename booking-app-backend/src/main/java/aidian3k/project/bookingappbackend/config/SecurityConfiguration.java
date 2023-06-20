package aidian3k.project.bookingappbackend.config;

import aidian3k.project.bookingappbackend.security.TokenAuthenticationFilter;
import aidian3k.project.bookingappbackend.service.CustomOAuthUserService;
import aidian3k.project.bookingappbackend.validation.oauth2.OAuthAuthenticationFailure;
import aidian3k.project.bookingappbackend.validation.oauth2.OAuthSuccessHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;

@EnableWebSecurity
@Configuration
@EnableGlobalMethodSecurity(
        jsr250Enabled = true,
        securedEnabled = true,
        prePostEnabled = true
)
@RequiredArgsConstructor
public class SecurityConfiguration {
    private final AuthenticationProvider authenticationProvider;
    private final TokenAuthenticationFilter tokenAuthenticationFilter;
    private final CustomOAuthUserService customOAuthUserService;
    private final OAuthSuccessHandler oAuthSuccessHandler;
    private final LogoutHandler logoutHandler;
    private final OAuthAuthenticationFailure oAuthAuthenticationFailure;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf()
                .disable()
                .cors()
                .and()
                .authorizeHttpRequests(request -> request.requestMatchers("/h2-console").permitAll())
                .authorizeHttpRequests(request -> request.requestMatchers("/api/v1/property/**").permitAll())
                .authorizeHttpRequests(request -> request.requestMatchers("/api/v1/review/**").permitAll())
                .authorizeHttpRequests(request -> request.requestMatchers("/api/v1/user/statistics/stars/**").permitAll())
                .authorizeHttpRequests()
                .and()
                .authorizeHttpRequests().requestMatchers("/api/v1/auth/**", "/oauth2/**")
                .permitAll()
                .anyRequest()
                .permitAll()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .oauth2Login()
                .userInfoEndpoint()
                .userService(customOAuthUserService)
                .and()
                .successHandler(oAuthSuccessHandler)
                .failureHandler(oAuthAuthenticationFailure);

        return http.addFilterBefore(tokenAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .authenticationProvider(authenticationProvider)
                .logout()
                .logoutUrl("/api/v1/auth/logout")
                .addLogoutHandler(logoutHandler)
                .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())
                .and().build();
    }
}