package aidian3k.project.bookingappbackend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Blob;

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

    @Lob
    @Schema(description = "The actual photo stored in database")
    @Column(nullable = false)
    @JsonIgnore
    private Blob data;

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
