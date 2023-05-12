package aidian3k.project.bookingappbackend.controller;

import aidian3k.project.bookingappbackend.entity.Photo;
import aidian3k.project.bookingappbackend.service.PhotoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/v1/photo")
public class PhotoController {
    private final PhotoService photoService;

    public PhotoController(PhotoService photoService) {
        this.photoService = photoService;
    }

    @GetMapping("/display/{photoId}")
    public ResponseEntity<byte[]> displayPhotoById(@PathVariable Long photoId) {
        byte[] photoBody = photoService.getSinglePhoto(photoId);

        return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(photoBody);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Photo>> getAllImages() {
        return new ResponseEntity<>(photoService.getAllPhotos(), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Photo> addNewImage(@RequestParam("photo") MultipartFile file) {
        return new ResponseEntity<>(photoService.addNewImage(file), HttpStatus.CREATED);
    }
}
