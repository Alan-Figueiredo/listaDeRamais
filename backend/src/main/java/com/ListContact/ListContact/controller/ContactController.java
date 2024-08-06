package com.ListContact.ListContact.controller;

import com.ListContact.ListContact.model.City.City;
import com.ListContact.ListContact.model.company.Company;
import com.ListContact.ListContact.model.contacts.Contact;
import com.ListContact.ListContact.model.contacts.ContactDto;
import com.ListContact.ListContact.model.sector.Sector;
import com.ListContact.ListContact.repository.CityRepository;
import com.ListContact.ListContact.repository.CompanyRepository;
import com.ListContact.ListContact.repository.ContactRepository;
import com.ListContact.ListContact.repository.SectorRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/contact")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private SectorRepository sectorRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private CityRepository cityRepository;

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
        System.out.println("Criar contato "+data);
        City city = cityRepository.findByNameCity(data.nomeCity());
        Company company = companyRepository.findByNameCompanyAndCityName(data.nomeCompany(), data.nomeCity());
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
            newContact.setIdCity(city);
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
                    result.setIdCompany( companyRepository.findByNameCompanyAndCityName(data.nomeCompany(), data.nomeCity()));
                    result.setIdSector(sectorRepository.findByNameSector(data.nomeSector()));
                    result.setIdCity(cityRepository.findByNameCity(data.nomeCity()));
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
