package com.ListContact.ListContact.repository;


import com.ListContact.ListContact.model.contacts.Contact;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ContactRepository extends JpaRepository<Contact, Integer> {

    @Query("SELECT c FROM Contact c JOIN c.idSector ci WHERE ci.nameSector = :nameSector")
    List<Contact> findByIdSector(String nameSector); //idSector

    @Query("SELECT c FROM Contact c JOIN c.idCity ci WHERE ci.nameCity = :nameCity")
    List<Contact> findByIdCity(String nameCity);
}
