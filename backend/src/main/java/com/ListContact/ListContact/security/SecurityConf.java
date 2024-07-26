package com.ListContact.ListContact.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
public class SecurityConf {

    @Autowired
    SecurityFilter securityFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorize -> authorize
                        // EndPoint da aplicação //
                        .requestMatchers(HttpMethod.GET, "/v3/api-docs/swagger-config").permitAll() // Desbloquear swagger
                        .requestMatchers(HttpMethod.GET, "/v3/api-docs").permitAll() // Desbloquear swagger
                        .requestMatchers(HttpMethod.GET, "/swagger-ui/**").permitAll() // Desbloquear swagger

                        // Company
                        .requestMatchers(HttpMethod.GET, "/api/company").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/company/{idCompany}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/company/create").permitAll()
                        .requestMatchers(HttpMethod.PATCH, "/api/company/{idCompany}").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/api/company/{idCompany}").permitAll()

                        // Sector
                        .requestMatchers(HttpMethod.GET, "/api/sector").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/sector/{idSector}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/sector/create").permitAll()
                        .requestMatchers(HttpMethod.PATCH, "/api/sector/{idSector}").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/api/sector/{idSector}").permitAll()

                        // Contact
                        .requestMatchers(HttpMethod.GET, "api/contact").permitAll()
                        .requestMatchers(HttpMethod.GET, "api/contact/{idContact}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/contact/create").permitAll()
                        .requestMatchers(HttpMethod.PATCH, "/api/contact/{idContact}").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/api/contact/{idContact}").permitAll()

                        //Auth
                        .requestMatchers(HttpMethod.GET, "/api/auth/users").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/auth/users/{idUser}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/auth/register").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/auth/login").permitAll()
                        .anyRequest().authenticated()
                )
                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authconf) throws Exception {

        return authconf.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


}
