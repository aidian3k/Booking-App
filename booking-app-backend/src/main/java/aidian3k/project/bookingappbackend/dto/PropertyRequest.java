package aidian3k.project.bookingappbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class PropertyRequest {
    private PropertyDto propertyDto;
    private List<MultipartFile> photos;
    private Integer userId;
}
