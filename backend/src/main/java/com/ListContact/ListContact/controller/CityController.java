package com.ListContact.ListContact.controller;


import com.ListContact.ListContact.model.City.City;
import com.ListContact.ListContact.model.City.CityDto;
import com.ListContact.ListContact.repository.CityRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/city")
public class CityController {

    @Autowired
    private CityRepository cityRepository;


    @GetMapping
    public List<City> listAllCity() {
        return cityRepository.findAll();
    }

    @GetMapping("/{idCity}")
    public ResponseEntity<City> listCityById(@PathVariable @Valid int idCity) {
        return cityRepository.findById(idCity)
                .map(result -> ResponseEntity.ok().body(result))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<City> createCity(@RequestBody @Valid CityDto data) {
        City nameExisting = cityRepository.findByNameCity(data.nome());
        if (nameExisting == null) {
            City newCity = new City();
            newCity.setNameCity(data.nome());
            cityRepository.save(newCity);
            return ResponseEntity.status(HttpStatus.CREATED).body(newCity);
        }
        else return ResponseEntity.status(HttpStatus.CONFLICT).build();
    }

    @PatchMapping("/{idCity}")
    public ResponseEntity<City> updateCity(@RequestBody @Valid CityDto data, @PathVariable @Valid int idCity) {
        return cityRepository.findById(idCity)
                .map(result -> {
                    result.setNameCity(data.nome());
                    City updatedCity = cityRepository.save(result);
                    return ResponseEntity.ok().body(updatedCity);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{idCity}")
    public ResponseEntity<Void> deleteCityById(@PathVariable @Valid int idCity) {
        return cityRepository.findById(idCity)
                .map(result -> {
                    cityRepository.delete(result);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

}
