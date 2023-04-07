package aidian3k.project.bookingappbackend.repository;

import aidian3k.project.bookingappbackend.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Integer> {
    Optional<Token> findByToken(String token);

    @Query(value = "SELECT t.* FROM tokens t " +
            "join users u on u.user_id = t.user_id" +
            " where t.user_id = :userId and (t.is_expired = false and t.is_revoked = false)"
            , nativeQuery = true)
    List<Token> findAllValidUserTokens(Integer userId);
}
