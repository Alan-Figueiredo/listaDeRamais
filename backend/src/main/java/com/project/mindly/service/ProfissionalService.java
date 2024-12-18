package com.project.mindly.service;

import com.project.mindly.dtos.profissional.ProfissionalDto;
import com.project.mindly.dtos.profissional.ProfissionalDtoPatch;
import com.project.mindly.enums.UserRoles;
import com.project.mindly.model.profissional.Profissional;
import com.project.mindly.repository.ProfissionalRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class ProfissionalService {

    private final ProfissionalRepository profissionalRepository;
    private final PasswordEncoder passwordEncoder;

    public ProfissionalService(ProfissionalRepository profissionalRepository, PasswordEncoder passwordEncoder) {
        this.profissionalRepository = profissionalRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<Profissional> findAllProfissional() {
        return profissionalRepository.findAll();
    }

    public Optional<Profissional> findProfissionalById(String cpf) {
        return Optional.ofNullable(profissionalRepository.findById(cpf))
                .orElseThrow(()-> new EntityNotFoundException("Profissional não encontrado com  o CPF: "+ cpf));
    }

    public Profissional saveProfissional (ProfissionalDto data) {
        Profissional profissional = new Profissional();
        profissional.setCpfProf(data.cpf());
        profissional.setNomeProf(data.nome());
        profissional.setCrp(data.crp());
        profissional.setEmailProf(data.email());
        String result = passwordEncoder.encode(data.senha());
        profissional.setSenha(result);
        profissional.setDescProf(data.descricao());
        profissional.setAbordagemTeorica(data.abordagemTeorica());
        profissional.setEnderecoProf(data.endereco());
        profissional.setTelefoneProf(data.tel());
        profissional.setRoles(UserRoles.PROFISSIONAL);
        return profissionalRepository.save(profissional);
    }

    public Profissional updateProfissional (String cpf,ProfissionalDtoPatch data) {
        Profissional profissional = profissionalRepository.findById(cpf)
                .orElseThrow(()-> new EntityNotFoundException("Profissional não encontrado com CPF: " + cpf));
        profissional.setNomeProf(data.nome());
        profissional.setCrp(data.crp());
        profissional.setEmailProf(data.email());
        profissional.setSenha(data.senha());
        profissional.setDescProf(data.descricao());
        profissional.setAbordagemTeorica(data.abordagemTeorica());
        profissional.setEnderecoProf(data.endereco());
        profissional.setTelefoneProf(data.tel());
        return profissionalRepository.save(profissional);
    }

    public void deleteProfissional(String cpf) {
        Profissional profissional = profissionalRepository.findById(cpf)
                .orElseThrow(()-> new EntityNotFoundException("Profissional não encontrado com CPF: " + cpf));
        profissionalRepository.delete(profissional);
    }
}
