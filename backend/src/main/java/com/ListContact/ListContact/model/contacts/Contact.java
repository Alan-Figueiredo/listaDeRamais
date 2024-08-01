package com.ListContact.ListContact.model.contacts;
import com.ListContact.ListContact.model.City.City;
import com.ListContact.ListContact.model.company.Company;
import com.ListContact.ListContact.model.sector.Sector;
import jakarta.persistence.*;

@Entity
@Table(name = "tb_contact")
public class Contact {


    @Id
    private int idContact;

    private String nameContact, number;

    @ManyToOne
    @JoinColumn(name = "idCompany")
    private Company idCompany;

    @ManyToOne
    @JoinColumn(name = "idSector")
    private Sector idSector;

    @ManyToOne
    @JoinColumn(name = "idCity")
    private City idCity;

    public int getIdContact() {
        return idContact;
    }

    public void setIdContact(int id_contact) {
        this.idContact = id_contact;
    }

    public String getNameContact() {
        return nameContact;
    }

    public void setNameContact(String nome) {
        this.nameContact = nome;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String ramal) {
        this.number = ramal;
    }

    public Company getIdCompany() {
        return idCompany;
    }

    public void setIdCompany(Company nameCompany) {
        this.idCompany = nameCompany;
    }

    public Sector getIdSector() {
        return idSector;
    }

    public void setIdSector(Sector nameSector) {
        this.idSector = nameSector;
    }

    public City getIdCity() {
        return idCity;
    }

    public void setIdCity(City nameCity) {
        this.idCity = nameCity;
    }
}
