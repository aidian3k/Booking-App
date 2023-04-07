package aidian3k.project.bookingappbackend.repository;

import aidian3k.project.bookingappbackend.entity.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PhotoRepository extends JpaRepository<Photo, Long> {
    Optional<Photo> getPhotoByPhotoId(Integer photoId);
}
