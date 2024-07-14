package com.ListContact.ListContact.model.sector;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_sector")
public class Sector {

    @Id
    private int idSector;

    private String nameSector;

    public int getIdSector() {
        return idSector;
    }

    public void setIdSector(int id) {
        this.idSector = id;
    }

    public String getNameSector() {
        return nameSector;
    }

    public void setNameSector(String nome) {
        this.nameSector = nome;
    }


}
