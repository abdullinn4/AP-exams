package org.example.apexams.config.ratelimit;

import io.github.bucket4j.Bucket;
import io.github.bucket4j.BucketConfiguration;
import io.github.bucket4j.ConsumptionProbe;
import io.github.bucket4j.redis.lettuce.cas.LettuceBasedProxyManager;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class RateLimitService {

    private final LettuceBasedProxyManager<String> proxyManager;
    private final BucketConfiguration loginRateLimitConfig;
    private final BucketConfiguration generalAuthRateLimitConfig;
    private final BucketConfiguration apiRateLimitConfig;

    public boolean tryConsumeLogin(String key) {
        return tryConsume("login:" + key, loginRateLimitConfig);
    }

    public boolean tryConsumeAuth(String key) {
        return tryConsume("auth:" + key, generalAuthRateLimitConfig);
    }

    public boolean tryConsumeApi(String key) {
        return tryConsume("api:" + key, apiRateLimitConfig);
    }

    public long getSecondsToWaitForLogin(String key) {
        return getSecondsToWait("login:" + key, loginRateLimitConfig);
    }

    public long getSecondsToWaitForAuth(String key) {
        return getSecondsToWait("auth:" + key, generalAuthRateLimitConfig);
    }

    public long getSecondsToWaitForApi(String key) {
        return getSecondsToWait("api:" + key, apiRateLimitConfig);
    }

    private boolean tryConsume(String key, BucketConfiguration config) {
        Bucket bucket = proxyManager.builder().build(key, config);
        boolean consumed = bucket.tryConsume(1);

        if (!consumed) {
            log.warn("Rate limit exceeded for key: {}", key);
        }

        return consumed;
    }

    private long getSecondsToWait(String key, BucketConfiguration config) {
        Bucket bucket = proxyManager.builder().build(key, config);
        ConsumptionProbe probe = bucket.tryConsumeAndReturnRemaining(1);

        if (probe.isConsumed()) {
            return 0;
        }

        return probe.getNanosToWaitForRefill() / 1_000_000_000;
    }
}