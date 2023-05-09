package aidian3k.project.bookingappbackend.controller;

import aidian3k.project.bookingappbackend.entity.Review;
import aidian3k.project.bookingappbackend.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/review")
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;

    @GetMapping("/user/{userId}")
    public List<Review> getUserReviews(@PathVariable Integer userId) {
        return reviewService.getUserReviews(userId);
    }

    @PostMapping
    public Review createNewReview(Review review) {
        return reviewService.createNewReview(review);
    }
}
