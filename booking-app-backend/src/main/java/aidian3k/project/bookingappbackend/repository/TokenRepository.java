package aidian3k.project.bookingappbackend.repository;

import aidian3k.project.bookingappbackend.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Integer> {
    Optional<List<Token>> findByToken(String token);

    @Query(value = """
      select t from tokens t inner join users u\s
      on t.user.id = u.id\s
      where u.id = :userId and (t.isExpired = false or t.isRevoked = false)\s
      """)
    List<Token> findAllValidUserTokens(Integer userId);
}
