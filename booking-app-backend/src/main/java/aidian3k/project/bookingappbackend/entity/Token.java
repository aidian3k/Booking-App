package aidian3k.project.bookingappbackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "tokens")
public class Token {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String token;
    private boolean isRevoked;
    private boolean isExpired;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}
