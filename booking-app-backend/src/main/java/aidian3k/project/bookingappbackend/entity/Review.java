package aidian3k.project.bookingappbackend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import java.util.Date;

@Entity
@Table(name = "reviews")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Length(max = 255)
    private String owner;

    @Column(nullable = false)
    @Length(max = 255)
    private String content;

    @Column(nullable = false)
    private double rating;

    @Column
    private Date date;

    @ManyToOne
    @JsonIgnore
    private User user;
}
