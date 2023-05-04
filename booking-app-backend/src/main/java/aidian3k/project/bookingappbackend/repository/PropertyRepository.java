package aidian3k.project.bookingappbackend.repository;

import aidian3k.project.bookingappbackend.entity.Property;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PropertyRepository extends JpaRepository<Property, Long> {
}