
package com.clonair.back.image;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Data
@Controller
@RequiredArgsConstructor
@RequestMapping("/api/img")
public class ImageController {
    
    private final ImageService imageService;
    
    @GetMapping("/{id}")
    public ResponseEntity<byte[]> imagen(@PathVariable String id) throws Exception {
        Image image = imageService.getOne(id);
        byte[] img = image.getContent();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.valueOf(image.getMime()));
        return new ResponseEntity<>(img, headers, HttpStatus.OK);
    }
}
