package com.ListContact.ListContact.model.company;

import com.ListContact.ListContact.model.City.City;
import jakarta.persistence.*;

@Entity
@Table(name = "tb_company")
public class Company {

    @Id
    private int idCompany;

    private String nameCompany;

    @ManyToOne
    @JoinColumn(name = "idCity")
    private City idCity;


    public int getIdCompany() {
        return idCompany;
    }

    public void setIdCompany(int id) {
        this.idCompany = id;
    }

    public String getNameCompany() {
        return nameCompany;
    }

    public void setNameCompany(String nome) {
        this.nameCompany = nome;
    }

    public City getId_city() {
        return idCity;
    }

    public void setId_city(City nameCity) {
        this.idCity = nameCity;
    }
}
