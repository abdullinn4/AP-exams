package org.example.apexams.admin.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.apexams.users.dto.CheckoutPrepareRequest;
import org.example.apexams.users.dto.UserResponse;
import org.example.apexams.users.entity.UserEntity;
import org.example.apexams.users.entity.enums.Role;
import org.example.apexams.users.repo.UserRepository;
import org.example.apexams.users.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/admin/users")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Admin - Users", description = "User management for administrators")
public class AdminUserController {
    private final UserService userService;
    private final UserRepository userRepository;

    @Operation(summary = "Get all users")
    @GetMapping
    public ResponseEntity<List<UserEntity>> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @Operation(summary = "Get user by ID")
    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUser(
            @Parameter(description = "User ID") @PathVariable UUID id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @Operation(summary = "Get user by email")
    @GetMapping("/email/{email}")
    public ResponseEntity<UserResponse> getUserByEmail(
            @Parameter(description = "User email") @PathVariable String email) {
        return ResponseEntity.ok(userService.getUserByEmail(email));
    }

    @Operation(summary = "Create new user", description = "Create user and return generated password")
    @PostMapping
    public ResponseEntity<String> createUser(
            @Parameter(description = "User data") @Valid @RequestBody CheckoutPrepareRequest request) {
        String password = userService.createUser(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(password);
    }

    @Operation(summary = "Block user", description = "Block user account")
    @PostMapping("/{id}/block")
    public ResponseEntity<Void> blockUser(
            @Parameter(description = "User ID") @PathVariable UUID id) {
        userService.blockUser(id);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Unblock user", description = "Unblock user account")
    @PostMapping("/{id}/unblock")
    public ResponseEntity<Void> unblockUser(
            @Parameter(description = "User ID") @PathVariable UUID id) {
        userService.unblockUser(id);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Change user role", description = "Change user role (STUDENT, ADMIN, OPS_MANAGER)")
    @PostMapping("/{id}/role")
    public ResponseEntity<Void> changeRole(
            @Parameter(description = "User ID") @PathVariable UUID id,
            @Parameter(description = "New role") @RequestParam Role role) {
        userService.changeRole(id, role);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Reset password", description = "Generate new password and send via email")
    @PostMapping("/{id}/reset-password")
    public ResponseEntity<String> resetPassword(
            @Parameter(description = "User ID") @PathVariable UUID id) {
        UserResponse user = userService.getUserById(id);
        String newPassword = userService.resetPassword(user.email());
        return ResponseEntity.ok(newPassword);
    }

    @Operation(summary = "Update Discord nickname")
    @PutMapping("/{id}/discord")
    public ResponseEntity<Void> updateDiscordNickname(
            @Parameter(description = "User ID") @PathVariable UUID id,
            @Parameter(description = "Discord nickname") @RequestParam String nickname) {
        UserResponse user = userService.getUserById(id);
        userService.updateDiscordNickname(user.email(), nickname);
        return ResponseEntity.ok().build();
    }
}
