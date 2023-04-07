package aidian3k.project.bookingappbackend.constants;

import lombok.Getter;
import org.springframework.stereotype.Component;

@Component
@Getter
public class JwtConstants {
    private final String tokenSecret = "";
    private final long tokenExpirationTimeInMillisecs = 864000000;
}
