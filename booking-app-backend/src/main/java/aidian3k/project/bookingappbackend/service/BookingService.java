package aidian3k.project.bookingappbackend.service;

import aidian3k.project.bookingappbackend.dto.BookingPageDto;
import aidian3k.project.bookingappbackend.dto.ProfilePageBookingDto;
import aidian3k.project.bookingappbackend.entity.Booking;
import aidian3k.project.bookingappbackend.entity.Property;
import aidian3k.project.bookingappbackend.entity.User;
import aidian3k.project.bookingappbackend.repository.BookingRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {
    private final PropertyService propertyService;
    private final UserService userService;
    private final BookingRepository bookingRepository;

    public List<Booking> getAllUserBookings(Integer userId) {
        User user = userService.getSingleUserById(userId);

        return user.getBookings();
    }

    public Booking getSingleBooking(Long bookingId) {
        return bookingRepository.findById(bookingId).orElseThrow(() -> new NotFoundException(""));
    }

    public Booking saveSingleBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public List<ProfilePageBookingDto> getProfilePageReservations(Integer userId) {
        User user = userService.getSingleUserById(userId);
        List<Property> properties = user.getProperties();
        List<Booking> profileBookings = new ArrayList<>();

        for (Property property : properties) {
            List<Booking> bookings = property.getBookings();

            for(Booking booking : bookings) {
                if (booking.getCheckOut().after(new Date())) {
                    profileBookings.add(booking);
                }
            }
        }

        return mapBookingListToBookingDto(profileBookings);
    }

    public void deleteSingleReservation(Long bookingId) {
        bookingRepository.delete(getSingleBooking(bookingId));
    }

    @Transactional
    public Booking createNewBooking(Booking booking, Integer userId, Long propertyId) {
        User reservationUser = userService.getSingleUserById(userId);
        Property property = propertyService.getPropertyFromRepository(propertyId);
        User hostUser = property.getUser();

        booking.setUser(reservationUser);
        booking.setProperty(property);

        Booking savedBooking = saveSingleBooking(booking);
        reservationUser.getBookings().add(booking);
        userService.saveSingleUser(reservationUser);
        propertyService.updateUserBookingProperty(booking, hostUser.getId(), propertyId);

        return savedBooking;
    }

    public BookingPageDto getProfilePageBookingInformation(Integer userId) {
        User user = userService.getSingleUserById(userId);
        List<Booking> userBookings = user.getBookings();
        List<Booking> currentBookings = new LinkedList<>();
        List<Booking> historyBookings = new LinkedList<>();

        userBookings.forEach(booking -> {
            if (booking.getCheckOut().before(new Date())) {
                historyBookings.add(booking);
            } else {
                currentBookings.add(booking);
            }
        });

        return new BookingPageDto(mapBookingListToBookingDto(currentBookings), mapBookingListToBookingDto(historyBookings));
    }

    private List<ProfilePageBookingDto> mapBookingListToBookingDto(List<Booking> userBookings) {
        List<ProfilePageBookingDto> transferBookings = new ArrayList<>();

        userBookings.forEach(booking -> {
            Property bookingProperty = booking.getProperty();
            ProfilePageBookingDto bookingDto = ProfilePageBookingDto.builder()
                    .photo(bookingProperty.getPhotos().get(0))
                    .checkIn(booking.getCheckIn())
                    .checkOut(booking.getCheckOut())
                    .title(bookingProperty.getTitle())
                    .hostId(bookingProperty.getUser().getId())
                    .totalPrice(booking.getTotalPrice())
                    .numberOfGuests(booking.getNumberOfGuests())
                    .propertyId(bookingProperty.getId())
                    .bookingId(booking.getId())
                    .clientId(booking.getUser().getId())
                    .build();

            transferBookings.add(bookingDto);
        });

        return transferBookings;
    }
}
