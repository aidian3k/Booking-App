package aidian3k.project.bookingappbackend.service;

import aidian3k.project.bookingappbackend.dto.MainPagePropertyDto;
import aidian3k.project.bookingappbackend.dto.ProfileAccommodationDto;
import aidian3k.project.bookingappbackend.dto.PropertyDto;
import aidian3k.project.bookingappbackend.entity.Photo;
import aidian3k.project.bookingappbackend.entity.Property;
import aidian3k.project.bookingappbackend.entity.User;
import aidian3k.project.bookingappbackend.repository.PropertyRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PropertyService {
    private final PropertyRepository propertyRepository;
    private final UserService userService;
    private final PhotoService photoService;


    public Property getPropertyById(Long propertyId) {
        return propertyRepository.findById(propertyId).orElseThrow(() -> new NotFoundException("The property has not been found!"));
    }

    public Property saveSingleProperty(Property property) {
        return propertyRepository.save(property);
    }

    @Transactional
    public Property addNewProperty(Integer userId, PropertyDto propertyDto, List<Long> photosId) {
        User user = userService.getSingleUserById(userId);
        List<Photo> photosList = photoService.getPhotosByIdList(photosId);

        Property property = Property.builder().title(propertyDto.getTitle()).country(propertyDto.getCountry())
                .city(propertyDto.getCity()).street(propertyDto.getStreet()).photos(photosList).description(propertyDto.getDescription())
                .wifi(propertyDto.isWifi()).placeToWork(propertyDto.isPlaceToWork()).pool(propertyDto.isPlaceToWork())
                .allowedAnimals(propertyDto.isAllowedAnimals()).kitchen(propertyDto.isKitchen()).airConditioning(propertyDto.isAirConditioning())
                .gasMeter(propertyDto.isGasMeter()).washingMachine(propertyDto.isWashingMachine()).extraInformation(propertyDto.getExtraInformation())
                .numberOfGuests(propertyDto.getNumberOfGuests()).numberOfBedrooms(propertyDto.getNumberOfBedrooms()).numberOfBeds(propertyDto.getNumberOfBeds())
                .cleaningFee(propertyDto.getCleaningFee()).price(propertyDto.getCleaningFee()).price(propertyDto.getPrice()).user(user).build();

        user.getProperties().add(property);
        userService.saveSingleUser(user);

        return saveSingleProperty(property);
    }

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public List<MainPagePropertyDto> getMainPageProperties() {
        int maximumNumberOfProperties = 50;
        List<Property> properties = propertyRepository
                .findAll(PageRequest.of(0, maximumNumberOfProperties))
                .getContent();
        
        return properties
                .stream()
                .map(property -> MainPagePropertyDto.builder()
                        .id(property.getId())
                        .pricePerNight(property.getPrice())
                        .description(property.getDescription())
                        .title(property.getTitle())
                        .ownerId(property.getUser().getId())
                        .country(property.getCountry())
                        .city(property.getCity())
                        .review(userService.getUserAverageReviewScale(property.getUser().getId()))
                        .build())
                .toList();
    }

    public List<ProfileAccommodationDto> getProfileAccommodation(Integer userId) {
        List<Property> properties = getUserProperties(userId);
        
        return properties.stream()
                .map(property -> new ProfileAccommodationDto(property.getId(), property.getTitle(), property.getDescription()))
                .collect(Collectors.toList());
    }

    private List<Property> getUserProperties(Integer userId) {
        User user = userService.getSingleUserById(userId);
        
        return user.getProperties().stream()
                .filter(property -> property.getUser().getId().equals(user.getId()))
                .collect(Collectors.toList());
    }
    
    public void deleteUserPropertyById(Integer userId, Long propertyId) {
        User user = userService.getSingleUserById(userId);
        Property property = user.getProperties().stream()
                .filter(foundProperty -> foundProperty.getId().equals(propertyId))
                .findAny()
                .orElseThrow(IllegalArgumentException::new);
        
        propertyRepository.delete(property);
    }
}
