package com.ListContact.ListContact.model.City;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "tb_city")
public class City {

    @Id
    private int idCity;

    private String nameCity;

    public int getIdCity() {
        return idCity;
    }

    public void setIdCity(int id) {
        this.idCity = id;
    }

    public String getNameCity() {
        return nameCity;
    }

    public void setNameCity(String name) {
        this.nameCity = name;
    }
}
