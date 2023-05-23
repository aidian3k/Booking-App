package aidian3k.project.bookingappbackend.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import java.util.Objects;

@Entity(name = "photos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Schema(description = "The table for storing the photos used in application")
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "The photo's unique Id", example = "1")
    private Integer photoId;

    @Length(max = 2000000)
    private String type;


    @Schema(description = "The actual photo stored in database")
    @Column(nullable = false, columnDefinition = "bytea")
    private byte[] data;

    @Override
    public boolean equals(Object comparedObject) {
        return comparedObject instanceof Photo
                && ((Photo) comparedObject).photoId.equals(this.photoId);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(photoId);
    }
}
