package org.example.apexams.auth.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.apexams.auth.dto.AuthRequest;
import org.example.apexams.auth.dto.AuthResponse;
import org.example.apexams.auth.dto.ForgotPasswordRequest;
import org.example.apexams.auth.service.AuthService;
import org.example.apexams.users.entity.UserEntity;
import org.example.apexams.users.entity.enums.Role;
import org.example.apexams.users.entity.enums.UserStatus;
import org.example.apexams.users.repo.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "User authentication and token management")
public class AuthController {
    private final AuthService authService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Operation(
            summary = "User login",
            description = "Authenticate user with email and password. Returns access and refresh tokens."
    )
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "Successfully authenticated",
                    content = @Content(schema = @Schema(implementation = AuthResponse.class))
            ),
            @ApiResponse(responseCode = "401", description = "Invalid credentials"),
            @ApiResponse(responseCode = "429", description = "Too many login attempts")
    })
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody AuthRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }

    @Operation(
            summary = "Refresh access token",
            description = "Get new access token using refresh token"
    )
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Token refreshed successfully"),
            @ApiResponse(responseCode = "401", description = "Invalid or expired refresh token")
    })
    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refresh(@RequestParam String refreshToken) {
        return ResponseEntity.ok(authService.refreshToken(refreshToken));
    }

    @Operation(
            summary = "Logout",
            description = "Invalidate refresh token"
    )
    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestParam String refreshToken) {
        authService.logout(refreshToken);
        return ResponseEntity.ok("Logged out successfully");
    }

    @Operation(
            summary = "Forgot password",
            description = "Send password reset email with new generated password"
    )
    @PostMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword(@RequestBody ForgotPasswordRequest request) {
        authService.forgotPassword(request);
        return ResponseEntity.ok("Password reset email sent successfully");
    }

    @PostMapping("/admin/create-test-user")
    public ResponseEntity<String> createTestUser() {
        // Проверь что пользователь не существует
        if (userRepository.existsByEmail("guest@example.ru")) {
            return ResponseEntity.badRequest().body("User already exists");
        }

        Instant now = Instant.now();

        // Создай пользователя
        UserEntity user = UserEntity.builder()
                .email("guest@example.ru")
                .passwordHash(passwordEncoder.encode("qwerty123"))
                .discordNickname("Test")
                .role(Role.STUDENT)
                .build();

        UserEntity user1 = UserEntity.builder()
                .email("k@y.ru")
                .passwordHash(passwordEncoder.encode("qwerty"))
                .discordNickname("@ptoawtearr")
                .role(Role.STUDENT)
                .build();

        UserEntity user2 = UserEntity.builder()
                .email("m@y.ru")
                .passwordHash(passwordEncoder.encode("qwerty"))
                .discordNickname("@topgcoder25")
                .role(Role.STUDENT)
                .build();

        UserEntity user3 = UserEntity.builder()
                .email("n@y.ru")
                .passwordHash(passwordEncoder.encode("qwerty"))
                .discordNickname("nargv")
                .role(Role.STUDENT)
                .build();

        userRepository.save(user);
        userRepository.save(user1);
        userRepository.save(user2);
        userRepository.save(user3);

        return ResponseEntity.ok("Test user created: guest@example.ru / qwerty123");
    }
}