package aidian3k.project.bookingappbackend.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "photos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "The table for storing the photos used in application")
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "The photo's unique Id", example = "1")
    private Integer photoId;

    @Column(nullable = false)
    @Schema(description = "The photo's name", example = "room123Photo")
    private String name;

    @Lob
    @Schema(description = "The actual photo stored in database")
    @Column(nullable = false)
    private Byte[] data;

    @ManyToOne
    @JoinColumn(name = "property_id")
    private Property property;

    @Override
    public boolean equals(Object comparedObject) {
        return comparedObject instanceof Photo
                && ((Photo) comparedObject).photoId.equals(this.photoId);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
