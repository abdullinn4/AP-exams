package org.example.apexams.config.ratelimit;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.servlet.HandlerInterceptor;

@Slf4j
@Component
@RequiredArgsConstructor
public class RateLimitInterceptor implements HandlerInterceptor {

    private final RateLimitService rateLimitService;
    private final RateLimitProperties properties;
    private final AntPathMatcher pathMatcher = new AntPathMatcher();

    @Override
    public boolean preHandle(
            HttpServletRequest request,
            HttpServletResponse response,
            Object handler
    ) throws Exception {

        String path = request.getRequestURI();

        // Skip excluded paths
        if (isExcluded(path)) {
            return true;
        }

        String clientIp = getClientIp(request);
        boolean allowed = true;
        long retryAfterSeconds = 0;

        // Rate limit for login endpoint (IP + username)
        if (path.startsWith("/api/v1/auth/login")) {
            String username = extractUsername(request);
            String key = username != null ? clientIp + ":" + username : clientIp;
            allowed = rateLimitService.tryConsumeLogin(key);
            if (!allowed) {
                retryAfterSeconds = rateLimitService.getSecondsToWaitForLogin(key);
            }
        }
        // Rate limit for other auth endpoints
        else if (path.startsWith("/api/v1/auth/")) {
            allowed = rateLimitService.tryConsumeAuth(clientIp);
            if (!allowed) {
                retryAfterSeconds = rateLimitService.getSecondsToWaitForAuth(clientIp);
            }
        }
        // Rate limit for general API
        else if (path.startsWith("/api/v1/")) {
            allowed = rateLimitService.tryConsumeApi(clientIp);
            if (!allowed) {
                retryAfterSeconds = rateLimitService.getSecondsToWaitForApi(clientIp);
            }
        }

        if (!allowed) {
            response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
            response.setContentType("application/json");
            response.setHeader("Retry-After", String.valueOf(retryAfterSeconds));
            response.getWriter().write(String.format(
                    "{\"error\":\"Too many requests. Please try again in %d seconds.\",\"status\":429,\"retryAfter\":%d}",
                    retryAfterSeconds, retryAfterSeconds
            ));
            log.warn("Rate limit exceeded for IP: {} on path: {} (retry after {} seconds)",
                    clientIp, path, retryAfterSeconds);
            return false;
        }

        return true;
    }

    private boolean isExcluded(String path) {
        return properties.getExcludedPaths().stream()
                .anyMatch(pattern -> pathMatcher.match(pattern, path));
    }

    private String extractUsername(HttpServletRequest request) {
        try {
            // Try to get from request body (simplified, в реальности нужен @RequestBody parser)
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            if (auth != null && auth.isAuthenticated()) {
                return auth.getName();
            }
        } catch (Exception e) {
            log.debug("Could not extract username from request", e);
        }
        return null;
    }

    private String getClientIp(HttpServletRequest request) {
        String xForwardedFor = request.getHeader("X-Forwarded-For");
        if (xForwardedFor != null && !xForwardedFor.isEmpty()) {
            String ip = xForwardedFor.split(",")[0].trim();
            // Validate if from trusted proxy
            if (isTrustedProxy(request.getRemoteAddr())) {
                return ip;
            }
        }

        String xRealIp = request.getHeader("X-Real-IP");
        if (xRealIp != null && !xRealIp.isEmpty() && isTrustedProxy(request.getRemoteAddr())) {
            return xRealIp;
        }

        return request.getRemoteAddr();
    }

    private boolean isTrustedProxy(String ip) {
        return properties.getTrustedProxies().contains(ip);
    }
}