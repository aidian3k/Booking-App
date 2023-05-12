package aidian3k.project.bookingappbackend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "properties")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String country;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String street;

    @OneToMany
    private List<Photo> photos = new ArrayList<>();

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private boolean wifi;

    @Column(nullable = false)
    private boolean placeToWork;

    @Column(nullable = false)
    private boolean pool;

    @Column(nullable = false)
    private boolean allowedAnimals;

    @Column(nullable = false)
    private boolean kitchen;

    @Column(nullable = false)
    private boolean airConditioning;

    @Column(nullable = false)
    private boolean gasMeter;

    @Column(nullable = false)
    private boolean washingMachine;

    @Column(nullable = false)
    private String extraInformation;

    @Column(nullable = false)
    private int numberOfGuests;

    @Column(nullable = false)
    private int numberOfBedrooms;

    @Column(nullable = false)
    private int numberOfBeds;

    @Column(nullable = false)
    private int cleaningFee;

    @Column(nullable = false)
    private int price;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    @OneToMany(mappedBy = "property")
    @JsonIgnore
    private List<Booking> bookings = new ArrayList<>();

}
