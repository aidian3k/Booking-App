package aidian3k.project.bookingappbackend.controller;

import aidian3k.project.bookingappbackend.dto.PropertyDto;
import aidian3k.project.bookingappbackend.dto.PropertyRequest;
import aidian3k.project.bookingappbackend.entity.Property;
import aidian3k.project.bookingappbackend.service.PropertyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/property")
public class PropertyController {
    private final PropertyService propertyService;

    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @PostMapping("/add")
    public ResponseEntity<Property> createNewProperty(@RequestBody PropertyRequest propertyRequest) {
        Integer userId = propertyRequest.getUserId();
        PropertyDto propertyDto = propertyRequest.getPropertyDto();
        List<Long> photosId = propertyRequest.getPhotosId();

        return new ResponseEntity<>(propertyService.addNewProperty(userId, propertyDto, photosId), HttpStatus.CREATED);
    }

    @GetMapping("/{propertyId}")
    public ResponseEntity<Property> getPropertyById(@PathVariable Long propertyId) {
        return new ResponseEntity<>(propertyService.getPropertyById(propertyId), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Property>> getAllProperties() {
        return new ResponseEntity<>(propertyService.getAllProperties(), HttpStatus.OK);
    }
}
