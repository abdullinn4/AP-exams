package org.example.apexams.config.ratelimit;

import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.BucketConfiguration;
import io.github.bucket4j.Refill;
import io.github.bucket4j.redis.lettuce.cas.LettuceBasedProxyManager;
import io.lettuce.core.RedisClient;
import io.lettuce.core.RedisURI;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.codec.ByteArrayCodec;
import io.lettuce.core.codec.RedisCodec;
import io.lettuce.core.codec.StringCodec;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.Duration;

@Configuration
@RequiredArgsConstructor
public class RateLimitConfig {

    @Value("${spring.data.redis.host}")
    private String redisHost;

    @Value("${spring.data.redis.port}")
    private int redisPort;

    @Value("${spring.data.redis.password}")
    private String redisPassword;

    @Bean
    public RedisClient redisClient() {
        RedisURI redisUri = RedisURI.builder()
                .withHost(redisHost)
                .withPort(redisPort)
                .withPassword(redisPassword.toCharArray())
                .build();
        return RedisClient.create(redisUri);
    }

    @Bean
    public StatefulRedisConnection<String, byte[]> redisConnection(RedisClient redisClient) {
        RedisCodec<String, byte[]> codec = RedisCodec.of(StringCodec.UTF8, ByteArrayCodec.INSTANCE);
        return redisClient.connect(codec);
    }

    @Bean
    public LettuceBasedProxyManager<String> proxyManager(
            StatefulRedisConnection<String, byte[]> connection
    ) {
        return LettuceBasedProxyManager.builderFor(connection)
                .build();
    }

    @Bean
    public BucketConfiguration loginRateLimitConfig() {
        // 5 requests per 15 minutes
        Bandwidth limit = Bandwidth.classic(5, Refill.intervally(5, Duration.ofMinutes(15)));
        return BucketConfiguration.builder()
                .addLimit(limit)
                .build();
    }

    @Bean
    public BucketConfiguration generalAuthRateLimitConfig() {
        // 10 requests per 5 minutes
        Bandwidth limit = Bandwidth.classic(10, Refill.intervally(10, Duration.ofMinutes(5)));
        return BucketConfiguration.builder()
                .addLimit(limit)
                .build();
    }

    @Bean
    public BucketConfiguration apiRateLimitConfig() {
        // 100 requests per minute
        Bandwidth limit = Bandwidth.classic(100, Refill.intervally(100, Duration.ofMinutes(1)));
        return BucketConfiguration.builder()
                .addLimit(limit)
                .build();
    }
}
