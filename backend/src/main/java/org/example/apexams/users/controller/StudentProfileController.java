package org.example.apexams.users.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.apexams.config.security.details.UserDetailsImpl;
import org.example.apexams.courses.dto.CourseWithProgressResponse;
import org.example.apexams.users.dto.ChangePasswordRequest;
import org.example.apexams.users.dto.UserResponse;
import org.example.apexams.users.service.StudentCourseService;
import org.example.apexams.users.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/me")
@RequiredArgsConstructor
@PreAuthorize("hasRole('STUDENT')")
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Student Profile", description = "Student profile and enrolled courses")
public class StudentProfileController {
    private final UserService userService;

    @Operation(summary = "Get current user profile")
    @GetMapping
    public ResponseEntity<UserResponse> getProfile(
            @Parameter(hidden = true) @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(userService.getUserById(userDetails.user().getId()));
    }

    @Operation(summary = "Change password", description = "Change user password")
    @PutMapping("/password")
    public ResponseEntity<Void> changePassword(
            @Valid @RequestBody ChangePasswordRequest request,
            @Parameter(hidden = true) @AuthenticationPrincipal UserDetailsImpl userDetails) {
        userService.changePassword(userDetails.user().getId(), request.currentPassword(), request.newPassword());
        return ResponseEntity.ok().build();
    }
}
