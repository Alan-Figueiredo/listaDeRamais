package com.ListContact.ListContact.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Autowired
    private String localIpAddress;

    @Override
    public void addCorsMappings(CorsRegistry registry) {

        String localHostServer = "http://"+ localIpAddress + ":5173";

        registry.addMapping("/**")
                .allowedOrigins(localHostServer) // adicionar o IP do servidor
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT", "PATCH")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
