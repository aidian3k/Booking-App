package aidian3k.project.bookingappbackend.repository;

import aidian3k.project.bookingappbackend.entity.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoRepository extends JpaRepository<Photo, Long> {
}
