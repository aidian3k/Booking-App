package aidian3k.project.bookingappbackend.validation.oauth2;

import java.util.Map;

public class GoogleOAuthUserInfo extends OAuthUserInfo{

    public GoogleOAuthUserInfo(Map<String, Object> attributes) {
        super(attributes);
    }

    @Override
    public String getId() {
        return attributes.get("sub").toString();
    }

    @Override
    public String getName() {
        return attributes.get("name").toString();
    }

    @Override
    public String getSurname() {
        return attributes.get("surname").toString();
    }

    @Override
    public String getEmail() {
        return attributes.get("email").toString();
    }

    @Override
    public String phoneNumber() {
        return attributes.get("phone").toString();
    }
}
