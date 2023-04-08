package aidian3k.project.bookingappbackend.service;

import aidian3k.project.bookingappbackend.entity.User;
import aidian3k.project.bookingappbackend.repository.UserRepository;
import aidian3k.project.bookingappbackend.validation.UserPrincipal;
import aidian3k.project.bookingappbackend.validation.oauth2.OAuthUserInfo;
import aidian3k.project.bookingappbackend.validation.oauth2.OauthUserInfoFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustomOAuthUserService extends DefaultOAuth2UserService {
    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        return processOAuthUser(userRequest, oAuth2User);
    }

    private OAuth2User processOAuthUser(OAuth2UserRequest userRequest, OAuth2User oAuth2User) {
        OAuthUserInfo oAuthUserInfo = OauthUserInfoFactory.getOAuthUserInfo(userRequest.getClientRegistration().getRegistrationId(), oAuth2User.getAttributes());
        String userEmail = oAuthUserInfo.getEmail();

        if (StringUtils.isEmpty(userEmail)) {
            throw new OAuth2AuthenticationException("Email has not been found!");
        }

        Optional<User> authenticateUser = userRepository.findByEmail(userEmail);
        User user;

        if(authenticateUser.isPresent()) {
            user = authenticateUser.get();
            user = updateExisitingUser(user, oAuthUserInfo);
        } else {
            user = registerUser(userRequest, oAuthUserInfo);
        }

        return UserPrincipal.create(user, oAuthUserInfo.getAttributes());
    }

    private User updateExisitingUser(User existingUser, OAuthUserInfo oAuth2User) {
        existingUser.setName(oAuth2User.getName());
        existingUser.setName(oAuth2User.getSurname());
        existingUser.setEmail(oAuth2User.getEmail());

        return userRepository.save(existingUser);
    }

    private User registerUser(OAuth2UserRequest userRequest, OAuthUserInfo oAuthUserInfo) {
        User newUser = User.builder().name(oAuthUserInfo.getName()).surname(oAuthUserInfo.getSurname())
                .email(oAuthUserInfo.getEmail()).build();

        return userRepository.save(newUser);
    }
}
