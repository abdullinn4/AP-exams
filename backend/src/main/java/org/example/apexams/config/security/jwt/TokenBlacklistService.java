package org.example.apexams.config.security.jwt;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.concurrent.TimeUnit;

@Slf4j
@Service
@RequiredArgsConstructor
public class TokenBlacklistService {
    private final RedisTemplate<String, String> redisTemplate;
    private final JwtService jwtService;

    private static final String BLACKLIST_PREFIX = "jwt:blacklist:";

    //Добавить токен в blacklist (при logout)
    public void blackListToken(String token) {
        try {
            Date expirationDate = jwtService.extractExpiration(token);
            long ttl = expirationDate.getTime() - System.currentTimeMillis();

            if (ttl > 0) {
                String key = BLACKLIST_PREFIX + token;
                redisTemplate.opsForValue().set(key, "blacklisted", ttl, TimeUnit.MILLISECONDS);
                log.info("Token blacklisted successfully");
            }

        } catch (Exception e) {
            log.error("Failed to blacklist token: " + e.getMessage());
        }
    }

    //Проверить, находится ли токен в blacklist

    public boolean isBlacklisted(String token) {
        try {
            String key = BLACKLIST_PREFIX + token;
            Boolean exists = redisTemplate.hasKey(key);
            return Boolean.TRUE.equals(exists);
        } catch (Exception e) {
            log.error("Failed to check token blacklist (Redis error): {}", e.getMessage());
            // Если Redis недоступен, не блокируем токен
            return false;
        }
    }

}
