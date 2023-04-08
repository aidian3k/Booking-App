package aidian3k.project.bookingappbackend.validation.oauth2;

import aidian3k.project.bookingappbackend.constants.AuthProvider;

import java.util.Map;

public class OauthUserInfoFactory {
    public static OAuthUserInfo getOAuthUserInfo(String registrationId, Map<String, Object> attributes) {
        if(registrationId.equalsIgnoreCase(AuthProvider.google.toString())) {
            return new GoogleOAuthUserInfo(attributes);
        } else if(registrationId.equalsIgnoreCase(AuthProvider.facebook.toString())) {
            return new FacebookOAuthUserInfo(attributes);
        } else {
            throw new IllegalStateException("I am sorry, the registrationId " + registrationId + " is not supported yet!");
        }
    }
}
