package com.ListContact.ListContact.repository;


import com.ListContact.ListContact.model.contacts.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Integer> {

}
