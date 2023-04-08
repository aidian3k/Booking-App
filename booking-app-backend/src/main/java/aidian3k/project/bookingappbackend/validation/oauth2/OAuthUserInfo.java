package aidian3k.project.bookingappbackend.validation.oauth2;

import java.util.Map;

public abstract class OAuthUserInfo {
    protected Map<String, Object> attributes;

    public OAuthUserInfo(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    public Map<String, Object> getAttributes() {
        return attributes;
    }

    public abstract String getId();
    public abstract String getName();
    public abstract String getSurname();
    public abstract String getEmail();
    public abstract String phoneNumber();

}
