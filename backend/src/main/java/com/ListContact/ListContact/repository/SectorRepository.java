package com.ListContact.ListContact.repository;

import com.ListContact.ListContact.model.sector.Sector;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SectorRepository extends JpaRepository<Sector, Integer> {

    Sector findByNameSector(String sectorName); // nameSector
}
