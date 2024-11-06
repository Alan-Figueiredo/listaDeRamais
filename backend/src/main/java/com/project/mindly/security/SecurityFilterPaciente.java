package com.project.mindly.security;



import com.project.mindly.repository.PacienteRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SecurityFilterPaciente  {

    private final TokenService tokenService;
    private final PacienteRepository pacienteRepository;

    public SecurityFilterPaciente(TokenService tokenService, PacienteRepository pacienteRepository) {
        this.tokenService = tokenService;
        this.pacienteRepository = pacienteRepository;
    }



    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        System.out.println("Pacientelalala");
        var token = this.recoverToken(request);
        if(token != null) {





        }
        filterChain.doFilter(request, response);
    }

    public String recoverToken(HttpServletRequest request) {
        var authHeader = request.getHeader("Authorization");
        if(authHeader != null) {
            return authHeader.replace("Bearer ", "");
        }
        if (request.getCookies()!= null){
            for (Cookie cookie : request.getCookies()) {
                if (cookie.getName().equals("AUTHTOKEN")) {
                    return cookie.getValue();
                }
            }
        }

        return null;
    }

    public Boolean validatedToken(HttpServletRequest token){
        var tokenUser = this.recoverToken(token);
        if(tokenUser != null){




            return true;
        }
        return false;
    }
}
