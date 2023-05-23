package aidian3k.project.bookingappbackend.service;

import aidian3k.project.bookingappbackend.entity.Photo;
import aidian3k.project.bookingappbackend.repository.PhotoRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PhotoService {
    private final PhotoRepository photoRepository;

    public byte[] getSinglePhoto(Long photoId) {
        Photo photo = getSinglePhotoById(photoId);

        return photo.getData();
    }

    public List<Photo> getAllPhotos() {
        return photoRepository.findAll();
    }

    public Photo getSinglePhotoById(Long photoId) {
        return photoRepository.findById(photoId).orElseThrow(
                () -> new IllegalArgumentException("Photo with given id does not exist!"));
    }

    public Photo saveSinglePhoto(Photo photo) {
        return photoRepository.save(photo);
    }

    @Transactional
    public Photo addNewImage(MultipartFile file) {
        try {
            byte[] photoBytes = file.getBytes();

            return saveSinglePhoto(Photo.builder().data(photoBytes).type(file.getContentType()).build());
        } catch(IOException exception) {
            throw new IllegalStateException("Photo cannot be added");
        }
    }
}
