package aidian3k.project.bookingappbackend.controller;

import aidian3k.project.bookingappbackend.dto.MainPagePropertyDto;
import aidian3k.project.bookingappbackend.dto.ProfileAccommodationDto;
import aidian3k.project.bookingappbackend.dto.PropertyDto;
import aidian3k.project.bookingappbackend.dto.SinglePropertyPageDto;
import aidian3k.project.bookingappbackend.entity.Property;
import aidian3k.project.bookingappbackend.service.PropertyService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.util.List;

@RestController
@RequestMapping("/api/v1/property")
public class PropertyController {
    private final PropertyService propertyService;

    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @PostMapping(path = "/add", consumes = {"multipart/form-data"})
    public ResponseEntity<Property> createNewProperty(MultipartHttpServletRequest request) throws JsonProcessingException {
        Integer userId = Integer.valueOf(request.getParameter("userId"));
        PropertyDto propertyDto = new ObjectMapper().readValue(request.getParameter("propertyDto"), PropertyDto.class);
        List<MultipartFile> photos = request.getFiles("photos");

        return new ResponseEntity<>(propertyService.addNewProperty(userId, propertyDto, photos), HttpStatus.CREATED);
    }

    @GetMapping("/{propertyId}")
    public ResponseEntity<SinglePropertyPageDto> getPropertyById(@PathVariable Long propertyId) {
        return new ResponseEntity<>(propertyService.getPropertyById(propertyId), HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Property>> getAllProperties() {
        return new ResponseEntity<>(propertyService.getAllProperties(), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<MainPagePropertyDto>> getMainPageProperties() {
        return new ResponseEntity<>(propertyService.getMainPageProperties(), HttpStatus.OK);
    }

    @GetMapping("/profile/{userId}")
    public ResponseEntity<List<ProfileAccommodationDto>> getProfileAccommodation(@PathVariable Integer userId) {
        return new ResponseEntity<>(propertyService.getProfileAccommodation(userId), HttpStatus.OK);
    }

    @DeleteMapping("/profile/{userId}/{propertyId}")
    public void deleteUserProperty(@PathVariable Integer userId, @PathVariable Long propertyId) {
        propertyService.deleteUserPropertyById(userId, propertyId);
    }
}
