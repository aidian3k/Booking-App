package aidian3k.project.bookingappbackend.service;

import aidian3k.project.bookingappbackend.entity.Review;
import aidian3k.project.bookingappbackend.entity.User;
import aidian3k.project.bookingappbackend.repository.ReviewRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final UserService userService;
    private final ReviewRepository reviewRepository;

    public Review createNewReview(Review review) {
        return reviewRepository.save(review);
    }

    public List<Review> getUserReviews(Integer userId) {
        User user = userService.getSingleUserById(userId);

        return user.getReviews();
    }

    @Transactional
    public Review createReviewForUser(Review review, Integer userId) {
        User user = userService.getSingleUserById(userId);
        review.setUser(user);
        Review newReview = createNewReview(review);

        user.getReviews().add(review);
        userService.saveSingleUser(user);

        return newReview;
    }
}
