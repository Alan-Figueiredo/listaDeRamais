package com.ListContact.ListContact.repository;

import com.ListContact.ListContact.model.company.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Integer> {

    Company findByNameCompany(String companyName); // nameCompany

}
