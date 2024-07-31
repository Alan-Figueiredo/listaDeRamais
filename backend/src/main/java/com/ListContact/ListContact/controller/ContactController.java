package com.ListContact.ListContact.controller;

import com.ListContact.ListContact.model.company.Company;
import com.ListContact.ListContact.model.contacts.Contact;
import com.ListContact.ListContact.model.contacts.ContactDto;
import com.ListContact.ListContact.model.sector.Sector;
import com.ListContact.ListContact.repository.CompanyRepository;
import com.ListContact.ListContact.repository.ContactRepository;
import com.ListContact.ListContact.repository.SectorRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/contact")
public class ContactController {

    final private ContactRepository contactRepository;
    final private SectorRepository sectorRepository;
    final private CompanyRepository companyRepository;

    public ContactController(ContactRepository contactRepository, SectorRepository sectorRepository, CompanyRepository companyRepository) {
        this.contactRepository = contactRepository;
        this.sectorRepository = sectorRepository;
        this.companyRepository = companyRepository;
    }

    @GetMapping
    public List<Contact> listAllCompany(){
        return contactRepository.findAll();

    }

    @GetMapping("/{idContact}")
    public ResponseEntity<Contact> listContactById(@PathVariable @Valid int idContact){
        return contactRepository.findById(idContact)
                .map(result -> ResponseEntity.ok().body(result))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<Contact> createContact(@RequestBody @Valid ContactDto data) {
        Company company = companyRepository.findByNameCompany(data.nomeCompany());
        Sector sector = sectorRepository.findByNameSector(data.nomeSector());
        if (company == null || sector == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        else {
            Contact newContact = new Contact();
            newContact.setNameContact(data.nome());
            newContact.setNumber(data.ramal());
            newContact.setIdCompany(company);
            newContact.setIdSector(sector);
            contactRepository.save(newContact);
            return ResponseEntity.status(HttpStatus.CREATED).body(newContact);
        }
    }


    @PatchMapping("/{idContact}")
    public ResponseEntity<Contact>updateContact(@RequestBody @Valid ContactDto data,@PathVariable @Valid int idContact) {
        return contactRepository.findById(idContact)
                .map(result -> {
                    result.setNameContact(data.nome());
                    result.setNumber(data.ramal());
                    result.setIdCompany(companyRepository.findByNameCompany(data.nomeCompany()));
                    result.setIdSector(sectorRepository.findByNameSector(data.nomeSector()));
                    contactRepository.save(result);
                    return ResponseEntity.status(HttpStatus.OK).body(result);
                })
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @DeleteMapping("/{idContact}")
    public ResponseEntity<Void> deleteContact(@PathVariable @Valid int idContact) {
        return contactRepository.findById(idContact)
                .map(result -> {
                    contactRepository.delete(result);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

}
