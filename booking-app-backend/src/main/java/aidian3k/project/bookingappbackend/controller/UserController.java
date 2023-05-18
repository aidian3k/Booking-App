package aidian3k.project.bookingappbackend.controller;

import aidian3k.project.bookingappbackend.dto.MainPageStatisticsDto;
import aidian3k.project.bookingappbackend.dto.UserDto;
import aidian3k.project.bookingappbackend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/statistics/{userId}")
    public MainPageStatisticsDto getUserStatisticsInfo(@PathVariable Integer userId) {
        return userService.getUserStatisticsInfo(userId);
    }

    @GetMapping("/{userId}")
    public UserDto getSingleUserDto(@PathVariable Integer userId) {
        return userService.getSingleUserDto(userId);
    }

    @GetMapping("/statistics/stars/{userId}")
    public int getUserAverageReviewScale(@PathVariable Integer userId) {
        return userService.getUserAverageReviewScale(userId);
    }
}
