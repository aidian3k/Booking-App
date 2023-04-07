package aidian3k.project.bookingappbackend.repository;

import aidian3k.project.bookingappbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findUserById(Integer userId);
    Optional<User> findByEmail(String email);
}
