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
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "User authentication and token management")
public class AuthController {
    private final AuthService authService;

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
}