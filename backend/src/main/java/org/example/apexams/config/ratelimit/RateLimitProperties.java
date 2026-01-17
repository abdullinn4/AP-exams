package org.example.apexams.config.ratelimit;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.List;

@Data
@Component
@ConfigurationProperties(prefix = "rate.limit")
public class RateLimitProperties {

    private List<String> excludedPaths = List.of(
            "/api/v1/public/**",
            "/api/v1/webhooks/**",
            "/actuator/**"
    );

    private List<String> trustedProxies = List.of(
            "127.0.0.1",
            "::1"
    );

    private Login login = new Login();
    private Auth auth = new Auth();
    private Api api = new Api();

    @Data
    public static class Login {
        private int capacity = 5;
        private int refillMinutes = 15;
    }

    @Data
    public static class Auth {
        private int capacity = 10;
        private int refillMinutes = 5;
    }

    @Data
    public static class Api {
        private int capacity = 100;
        private int refillMinutes = 1;
    }
}