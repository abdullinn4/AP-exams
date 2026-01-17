package org.example.apexams.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class OpenApiConfig {

    @Value("${app.frontend.url}")
    private String frontendUrl;

    @Bean
    public OpenAPI customOpenAPI() {
        final String securitySchemeName = "bearerAuth";

        return new OpenAPI()
                .info(new Info()
                        .title("AP Exams Platform API")
                        .version("1.0.0")
                        .description("""
                                REST API for AP Exams preparation platform.
                                
                                ## Features
                                - Course management (Basic/Pro tiers)
                                - Module content (video + text)
                                - Tests and Mock Exams
                                - Progress tracking
                                - Stripe payments
                                - Discord integration
                                
                                ## Authentication
                                Most endpoints require JWT Bearer token.
                                Use `/api/v1/auth/login` to obtain access token.
                                """)
                        .contact(new Contact()
                                .name("AP Exams Support")
                                .email("support@apexams.com"))
                        .license(new License()
                                .name("Proprietary")
                                .url("https://apexams.com/terms")))
                .servers(List.of(
                        new Server()
                                .url("http://localhost:8080")
                                .description("Local Development"),
                        new Server()
                                .url("https://api.apexams.com")
                                .description("Production")
                ))
                .addSecurityItem(new SecurityRequirement().addList(securitySchemeName))
                .components(new Components()
                        .addSecuritySchemes(securitySchemeName,
                                new SecurityScheme()
                                        .name(securitySchemeName)
                                        .type(SecurityScheme.Type.HTTP)
                                        .scheme("bearer")
                                        .bearerFormat("JWT")
                                        .description("JWT token obtained from /api/v1/auth/login")));
    }
}
