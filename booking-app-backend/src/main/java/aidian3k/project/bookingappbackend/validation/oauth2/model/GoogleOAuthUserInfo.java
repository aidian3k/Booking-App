package aidian3k.project.bookingappbackend.validation.oauth2.model;

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


    public String getSurname() {
        return "Nowosielski";
    }

    @Override
    public String getEmail() {
        return attributes.get("email").toString();
    }


    public String phoneNumber() {
        return "728221243";
    }
}
