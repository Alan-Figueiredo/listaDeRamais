package com.project.mindly.service;

import com.project.mindly.model.paciente.Paciente;
import com.project.mindly.model.profissional.Profissional;
import com.project.mindly.repository.PacienteRepository;
import com.project.mindly.repository.ProfissionalRepository;
import com.project.mindly.security.TokenService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final PacienteRepository pacienteRepository;
    private final ProfissionalRepository profissionalRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    public AuthService(PacienteRepository pacienteRepository, ProfissionalRepository profissionalRepository,
                       PasswordEncoder passwordEncoder, TokenService tokenService) {
        this.pacienteRepository = pacienteRepository;
        this.profissionalRepository = profissionalRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenService = tokenService;
    }


    public String authenticatePaciente(String email, String senha) {
        Paciente paciente = pacienteRepository.findByEmailPaciente(email);
        if(passwordEncoder.matches(senha, paciente.getPassword())) {
            return this.tokenService.generateTokenPaciente(paciente);
        }
        return null;
    }

    public String authenticateProfissional(String email, String senha) {
        Profissional profissional = profissionalRepository.findByEmailProf(email);
        if(passwordEncoder.matches(senha, profissional.getPassword())) {
            return this.tokenService.generateTokenProfissional(profissional);
        }
        return null;

    }


}
