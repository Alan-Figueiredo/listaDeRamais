package com.ListContact.ListContact.repository;



import com.ListContact.ListContact.model.company.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CompanyRepository extends JpaRepository<Company, Integer> {

    Company findByNameCompany(String companyName); // nameCompany

    @Query("SELECT c FROM Company c JOIN c.idCity ci WHERE c.nameCompany = :companyName AND ci.nameCity = :cityName")
    Company findByNameCompanyAndCityName(@Param("companyName") String companyName, @Param("cityName") String cityName);
}
