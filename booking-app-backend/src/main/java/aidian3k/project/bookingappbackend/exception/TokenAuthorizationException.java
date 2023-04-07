package aidian3k.project.bookingappbackend.exception;

public class TokenAuthorizationException extends RuntimeException {
    private final String message;
    private final String token;

    public TokenAuthorizationException(String message, String token) {
        super(message);
        this.token = token;
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public String getToken() {
        return token;
    }
}
