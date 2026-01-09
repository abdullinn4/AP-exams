package org.example.apexams.auth.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.auth.dto.AuthRequest;
import org.example.apexams.auth.dto.AuthResponse;
import org.example.apexams.auth.dto.TokenPair;
import org.example.apexams.config.security.details.UserDetailsServiceImpl;
import org.example.apexams.config.security.jwt.JwtService;
import org.example.apexams.config.security.jwt.TokenBlacklistService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthService {
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserDetailsServiceImpl userDetailsService;
    private final TokenBlacklistService tokenBlacklistService;

    public AuthResponse login(AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.email(),
                        request.password()
                )
        );

        UserDetails user = userDetailsService.loadUserByUsername(request.email());

        return new AuthResponse(
                new TokenPair(
                        jwtService.generateAccessToken(user),
                        jwtService.generateRefreshToken(user)
                )
        );
    }

    public AuthResponse refreshToken(String refreshToken) {
        String username = jwtService.extractUsername(refreshToken);
        UserDetails user = userDetailsService.loadUserByUsername(username);

        if (!jwtService.isTokenValid(refreshToken, user)) {
            throw new RuntimeException("Invalid refresh token");
        }

        return new AuthResponse(
                new TokenPair(
                        jwtService.generateAccessToken(user),
                        jwtService.generateRefreshToken(user)
                )
        );
    }

    public void logout(String refreshToken) {
        tokenBlacklistService.blackListToken(refreshToken);
        log.info("User logged out successfully");
    }
}
