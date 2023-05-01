package aidian3k.project.bookingappbackend.constants;

import lombok.Getter;
import org.springframework.stereotype.Component;

@Component
@Getter
public class JwtConstants {
    private final String tokenSecret = "3677397A24432646294A404E635266556A586E327235753878214125442A472D";
    private final long tokenExpirationTimeInMillisecond = 3_600_0000;
    private final long refreshTokenExpirationTimeInMillisecond = 86_400_000;
}
