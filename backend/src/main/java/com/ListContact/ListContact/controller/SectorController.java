package com.ListContact.ListContact.controller;


import com.ListContact.ListContact.model.sector.Sector;
import com.ListContact.ListContact.model.sector.SectorDto;
import com.ListContact.ListContact.repository.SectorRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sector")
@Tag(name = "Setor")
public class SectorController {

    final private SectorRepository sectorRepository;

    public SectorController(SectorRepository sectorRepository) {
        this.sectorRepository = sectorRepository;
    }

    @GetMapping
    public List<Sector> listAllSector(){
        return sectorRepository.findAll();
    }

    @GetMapping("/{idSector}")
    public ResponseEntity<Sector> listSectorById(@PathVariable @Valid int idSector){
        return sectorRepository.findById(idSector)
                .map(result -> ResponseEntity.ok().body(result))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<Sector> createSector(@RequestBody @Valid SectorDto data){
        Sector nameExisting = sectorRepository.findByNameSector(data.nome());
        if(nameExisting == null){
            Sector newSector = new Sector();
            newSector.setNameSector(data.nome());
            sectorRepository.save(newSector);
            return ResponseEntity.status(HttpStatus.CREATED).body(newSector);
        }
        else return ResponseEntity.status(HttpStatus.CONFLICT).build();
    }

    @PatchMapping("/{idSector}")
    public ResponseEntity<Sector> updateSector(@RequestBody @Valid SectorDto data,@PathVariable @Valid int idSector){
        return sectorRepository.findById(idSector)
                .map(result -> {
                    result.setNameSector(data.nome());
                    Sector updatedSector = sectorRepository.save(result);
                    return ResponseEntity.ok().body(updatedSector);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{idSector}")
    public ResponseEntity<Void> deleteSector(@PathVariable @Valid int idSector){
        return sectorRepository.findById(idSector)
                .map(result -> {
                    sectorRepository.delete(result);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

}
