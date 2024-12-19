package org.example.iset2024;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Autoriser tous les chemins de l'API
                .allowedOrigins("http://localhost:4200")  // Autoriser l'origine Angular
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // Autoriser les méthodes HTTP
                .allowedHeaders("*")  // Autoriser tous les headers
                .allowCredentials(true)  // Autoriser les cookies/sessions partagées
                .maxAge(3600);  // Durée de validité des permissions en secondes
    }}