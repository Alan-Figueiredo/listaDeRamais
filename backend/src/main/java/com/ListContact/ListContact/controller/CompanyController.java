package com.ListContact.ListContact.controller;


import com.ListContact.ListContact.model.company.Company;
import com.ListContact.ListContact.model.company.CompanyDto;
import com.ListContact.ListContact.repository.CompanyRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/company")
public class CompanyController {

    final private CompanyRepository companyRepository;

    public CompanyController(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @GetMapping
    public List<Company> listAllCompany(){
        return companyRepository.findAll();
    }

    @GetMapping("/{idCompany}")
    public ResponseEntity<Company> getCompanyById(@PathVariable @Valid int idCompany){
        return companyRepository.findById(idCompany)
                .map(result -> ResponseEntity.ok().body(result))
                .orElse(ResponseEntity.notFound().build());
    }


    @Operation(summary = "Criar uma empresa",
            method = "POST",
            description = "Cria uma nova empresa com o nome fornecido.\nRetorna um erro se a empresa já existir.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200",description = "Dados adicionados com sucesso"),
            @ApiResponse(responseCode = "409",description = "Empresa ja existente")
    })
    @PostMapping("/create")
    public ResponseEntity<Company> createCompany (@RequestBody @Valid CompanyDto data) {

            Company nameExisting = companyRepository.findByNameCompany(data.nome());
            if (nameExisting == null) {
                Company newCompany = new Company();
                newCompany.setNameCompany(data.nome());
                companyRepository.save(newCompany);
                return ResponseEntity.status(HttpStatus.CREATED).body(newCompany);
            }
            else return ResponseEntity.status(HttpStatus.CONFLICT).build();


    }

    @PatchMapping("/{idCompany}")
    public ResponseEntity<Company> updateCompany(@PathVariable @Valid int idCompany,
                                                 @RequestBody @Valid CompanyDto data){
        return companyRepository.findById(idCompany)
            .map(result -> {
                result.setNameCompany(data.nome());
                Company updatedCompany = companyRepository.save(result);
                return ResponseEntity.ok().body(updatedCompany);
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{idCompany}")
    public ResponseEntity<Void> deleteCompany(@PathVariable @Valid int idCompany){
        return companyRepository.findById(idCompany)
                .map(result -> {
                    companyRepository.deleteById(idCompany);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
