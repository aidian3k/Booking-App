package aidian3k.project.bookingappbackend.service;

import aidian3k.project.bookingappbackend.entity.Photo;
import aidian3k.project.bookingappbackend.repository.PhotoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.serial.SerialBlob;
import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PhotoService {
    private final PhotoRepository photoRepository;

    public byte[] getSinglePhoto(Long photoId) {
        try {
            Photo photo = getSinglePhotoById(photoId);

            return photo.getData().getBytes(1, (int) photo.getData().length());
        } catch (SQLException sqlException) {
            throw new IllegalStateException("Conversion cannot be done!, Photo cannot be displayed");
        }
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

    public Integer addNewImage(MultipartFile file) {
        try {
            byte[] photoBytes = file.getBytes();
            Blob photoBlob = new SerialBlob(photoBytes);
            Photo photo = Photo.builder().data(photoBlob).build();

            return saveSinglePhoto(photo).getPhotoId();
        } catch (SQLException | IOException sqlException) {
            throw new IllegalStateException();
        }
    }

    public List<Photo> getPhotosByIdList(List<Long> photosId) {
        List<Photo> photos = new ArrayList<>();
        photosId.forEach(photoId -> photos.add(getSinglePhotoById(photoId)));

        return photos;
    }
}
