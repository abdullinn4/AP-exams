package org.example.apexams.auth.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.apexams.auth.dto.AuthRequest;
import org.example.apexams.auth.dto.AuthResponse;
import org.example.apexams.auth.dto.ForgotPasswordRequest;
import org.example.apexams.auth.dto.TokenPair;
import org.example.apexams.config.security.details.UserDetailsServiceImpl;
import org.example.apexams.config.security.jwt.JwtService;
import org.example.apexams.config.security.jwt.TokenBlacklistService;
import org.example.apexams.email.service.EmailService;
import org.example.apexams.users.service.UserService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthService {
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserDetailsServiceImpl userDetailsService;
    private final TokenBlacklistService tokenBlacklistService;
    private final EmailService emailService;
    private final UserService userService;

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

        if (tokenBlacklistService.isBlacklisted(refreshToken)) {
            throw new RuntimeException("Token is blacklisted");
        }

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

    @Transactional
    public void forgotPassword(ForgotPasswordRequest request) {
        String newPassword = userService.resetPassword(request.email());
        emailService.sendNewPasswordEmail(request.email(), newPassword);
        log.info("Password reset email sent to: {}", request.email());
    }
}
