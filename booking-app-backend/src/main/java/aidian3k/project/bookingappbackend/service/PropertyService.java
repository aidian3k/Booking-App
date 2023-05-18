package aidian3k.project.bookingappbackend.service;

import aidian3k.project.bookingappbackend.dto.*;
import aidian3k.project.bookingappbackend.entity.Booking;
import aidian3k.project.bookingappbackend.entity.Photo;
import aidian3k.project.bookingappbackend.entity.Property;
import aidian3k.project.bookingappbackend.entity.User;
import aidian3k.project.bookingappbackend.repository.PropertyRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.webjars.NotFoundException;

import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PropertyService {
    private final PropertyRepository propertyRepository;
    private final UserService userService;
    private final PhotoService photoService;

    public SinglePropertyPageDto getPropertyById(Long propertyId) {
        Property property = getPropertyFromRepository(propertyId);
        User host = property.getUser();
        UserDto userDto = new UserDto(host);

        return SinglePropertyPageDto.builder().userDto(userDto).property(property).build();
    }

    public Property saveSingleProperty(Property property) {
        return propertyRepository.save(property);
    }

    public Property getPropertyFromRepository(Long propertyId) {
        return propertyRepository
                .findById(propertyId)
                .orElseThrow(() -> new NotFoundException("The property has not been found!"));
    }

    @Transactional
    public Property addNewProperty(Integer userId, PropertyDto propertyDto, List<MultipartFile> files) {
        User user = userService.getSingleUserById(userId);

        Property property = mapPropertyDtoToProperty(propertyDto, user);

        for (MultipartFile file : files) {
            Photo singlePhoto = photoService.addNewImage(file);
            property.getPhotos().add(singlePhoto);
        }

        user.getProperties().add(property);
        userService.saveSingleUser(user);

        return saveSingleProperty(property);
    }

    private static Property mapPropertyDtoToProperty(PropertyDto propertyDto, User user) {
        return Property.builder()
                .title(propertyDto.getTitle())
                .country(propertyDto.getCountry())
                .city(propertyDto.getCity())
                .street(propertyDto.getStreet())
                .description(propertyDto.getDescription())
                .wifi(propertyDto.isWifi())
                .placeToWork(propertyDto.isPlaceToWork())
                .pool(propertyDto.isPool())
                .allowedAnimals(propertyDto.isAllowedAnimals())
                .kitchen(propertyDto.isKitchen())
                .airConditioning(propertyDto.isAirConditioning())
                .gasMeter(propertyDto.isGasMeter())
                .washingMachine(propertyDto.isWashingMachine())
                .extraInformation(propertyDto.getExtraInformation())
                .numberOfGuests(propertyDto.getNumberOfGuests())
                .numberOfBedrooms(propertyDto.getNumberOfBedrooms())
                .numberOfBeds(propertyDto.getNumberOfBeds())
                .cleaningFee(propertyDto.getCleaningFee())
                .price(propertyDto.getCleaningFee())
                .price(propertyDto.getPrice())
                .user(user)
                .photos(new ArrayList<>())
                .bookings(new ArrayList<>())
                .build();
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
                .map(this::getMainPagePropertyDto)
                .toList();
    }

    private MainPagePropertyDto getMainPagePropertyDto(Property property) {
        return MainPagePropertyDto.builder()
                .id(property.getId())
                .pricePerNight(property.getPrice())
                .description(property.getDescription())
                .title(property.getTitle())
                .ownerId(property.getUser().getId())
                .country(property.getCountry())
                .city(property.getCity())
                .review(userService.getUserAverageReviewScale(property.getUser().getId()))
                .photo(property.getPhotos().get(0))
                .build();
    }

    public List<ProfileAccommodationDto> getProfileAccommodation(Integer userId) {
        List<Property> properties = getUserProperties(userId);
        
        return properties.stream()
                .map(property -> ProfileAccommodationDto.builder()
                        .street(property.getStreet())
                        .id(property.getId())
                        .photo(property.getPhotos().get(0))
                        .city(property.getCity())
                        .country(property.getCountry())
                        .description(property.getDescription())
                        .extraInformation(property.getExtraInformation())
                        .pricePerNight(property.getPrice())
                        .title(property.getTitle())
                        .build())
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

    @Transactional
    public Property editUserProperty(PropertyDto propertyDto, Integer userId, Long propertyId) {
        Property property = propertyRepository.findById(propertyId).orElseThrow();
        User user = userService.getSingleUserById(userId);
        Property mappedProperty = mapPropertyDtoToProperty(propertyDto, user);
        mappedProperty.setPhotos(property.getPhotos());
        mappedProperty.setId(property.getId());

        Property addedProperty = saveSingleProperty(mappedProperty);

        user.getProperties().removeIf(foundProperty -> foundProperty.getId().equals(propertyId));
        user.getProperties().add(addedProperty);
        userService.saveSingleUser(user);

        return addedProperty;
    }

    @Transactional
    public void updateUserBookingProperty(Booking booking, Integer userId, Long propertyId) {
        Property property = propertyRepository.findById(propertyId).orElseThrow();
        User user = userService.getSingleUserById(userId);
        property.getBookings().add(booking);

        Property addedProperty = saveSingleProperty(property);

        user.getProperties().removeIf(foundProperty -> foundProperty.getId().equals(propertyId));
        user.getProperties().add(addedProperty);
        userService.saveSingleUser(user);
    }

    public List<MainPagePropertyDto> filterPropertiesOnMainPage(MainFilterObject mainFilterObject) {
        List<Property> properties = getAllProperties();

        properties = properties
                .stream()
                .filter(property -> property.getCity().equals(mainFilterObject.getPlace())
                        || property.getCountry().equals(mainFilterObject.getPlace()))
                .toList();

        properties = filterPropertiesByDate(properties, mainFilterObject.getArrival(), mainFilterObject.getDepartment());
        properties = properties.stream()
                .filter(property -> property.getNumberOfGuests() >= mainFilterObject.getNumberOfGuests())
                .collect(Collectors.toList());

        return properties.stream()
                .map(this::getMainPagePropertyDto)
                .toList();
    }

    private List<Property> filterPropertiesByDate(List<Property> properties, Date arrival, Date department) {
        List<Property> filteredProperties = new LinkedList<>();

        for (Property property : properties) {
            List<Booking> bookings = property.getBookings();

            if (checkIfBookingIsAvailable(bookings, arrival, department)) {
                filteredProperties.add(property);
            }
        }

        return filteredProperties;
    }

    private boolean checkIfBookingIsAvailable(List<Booking> bookings, Date arrival, Date department) {
        for (Booking booking : bookings) {
            Date bookingStartDate = booking.getCheckIn();
            Date bookingEndDate = booking.getCheckOut();

            if (bookingStartDate.compareTo(arrival) >= 0 && bookingStartDate.compareTo(department) < 0) {
                return false;
            }

            if (bookingEndDate.compareTo(arrival) > 0 && bookingEndDate.compareTo(department) <= 0) {
                return false;
            }

            if (bookingStartDate.compareTo(arrival) <= 0 && bookingEndDate.compareTo(department) >= 0) {
                return false;
            }
        }

        return true;
    }

    public List<MainPagePropertyDto> performAdvancedFilterOnMainPage(AdvancedFilterDto advancedFilterDto) {
        List<MainPagePropertyDto> currentFilteredProperties = advancedFilterDto.getPropertyDtoList();
        int minimalPrice = advancedFilterDto.getMinimalPrice();
        int maximalPrice = advancedFilterDto.getMaximalPrice();
        int numberOfBeds = advancedFilterDto.getNumberOfBeds();
        int numberOfBedrooms = advancedFilterDto.getNumberOfBedrooms();

        List<Property> filteredProperties = currentFilteredProperties
                .stream().map(propertyDto -> getPropertyFromRepository(propertyDto.getId()))
                .toList();

        filteredProperties = filteredProperties.stream()
                .filter(property -> property.getPrice() >= minimalPrice && property.getPrice() <= maximalPrice)
                .collect(Collectors.toList());

        filteredProperties = filteredProperties.stream()
                .filter(property -> property.getNumberOfBeds() == numberOfBeds)
                .collect(Collectors.toList());

        filteredProperties = filteredProperties.stream()
                .filter(property -> property.getNumberOfBedrooms() == numberOfBedrooms)
                .collect(Collectors.toList());

        return filteredProperties.stream()
                .map(this::getMainPagePropertyDto)
                .toList();
    }
}
