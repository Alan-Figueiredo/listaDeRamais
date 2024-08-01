package com.ListContact.ListContact.repository;

import com.ListContact.ListContact.model.City.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<City, Integer> {

    City findByNameCity(String cityName);
    long countByNameCity(String cityName);
}
