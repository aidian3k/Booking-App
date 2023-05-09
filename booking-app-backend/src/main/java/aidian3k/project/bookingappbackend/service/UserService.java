package aidian3k.project.bookingappbackend.service;

import aidian3k.project.bookingappbackend.entity.User;
import aidian3k.project.bookingappbackend.exception.UserNotFoundException;
import aidian3k.project.bookingappbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

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
}
