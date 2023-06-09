package aidian3k.project.bookingappbackend.service;

import aidian3k.project.bookingappbackend.dto.MainPageStatisticsDto;
import aidian3k.project.bookingappbackend.dto.UserDto;
import aidian3k.project.bookingappbackend.entity.Review;
import aidian3k.project.bookingappbackend.entity.User;
import aidian3k.project.bookingappbackend.exception.UserNotFoundException;
import aidian3k.project.bookingappbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User getSingleUserById(Integer userId) {
        return userRepository.findUserById(userId)
                .orElseThrow(() -> new UserNotFoundException("User with given id has not been found!", HttpStatus.NOT_FOUND));
    }

    public User saveSingleUser(User user) {
        return userRepository.save(user);
    }

    public MainPageStatisticsDto getUserStatisticsInfo(Integer userId) {
        User user = getSingleUserById(userId);

        return new MainPageStatisticsDto(user.getBookings().size(), user.getProperties().size(), user.getReviews().size(), getUserAverageReviewScale(userId));
    }

    public int getUserAverageReviewScale(Integer userId) {
        User user = getSingleUserById(userId);

        return calculateAverageReview(user.getReviews());
    }

    private int calculateAverageReview(List<Review> reviews) {
        int currentReviewSum = 0;
        int numberOfReviews = reviews.size();

        if (numberOfReviews == 0) {
            return 5;
        }

        for (Review review : reviews) {
            currentReviewSum += review.getRating();
        }

        return currentReviewSum / numberOfReviews;
    }

    public UserDto getSingleUserDto(Integer userId) {
        User user = getSingleUserById(userId);
        return UserDto.builder()
                .id(user.getId())
                .name(user.getName())
                .surname(user.getSurname())
                .email(user.getEmail())
                .phoneNumber(user.getPhoneNumber())
                .creationDate(user.getCreationDate())
                .build();
    }
}
