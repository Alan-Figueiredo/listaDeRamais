package com.ListContact.ListContact.model.company;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_company")
public class Company {

    @Id
    private int idCompany;

    private String nameCompany;

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


}
