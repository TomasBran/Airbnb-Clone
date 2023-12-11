
package com.clonair.back.property;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/property")
public class PropertyController {
    
    private final PropertyService propertyService;

    @GetMapping("{id}")
    public ResponseEntity<PropertyResponse> getOne(@RequestBody PropertyRequest request) throws Exception{
        return ResponseEntity.ok(propertyService.getOne(String.valueOf(request)));
    }

    @GetMapping()
    public ResponseEntity<List<PropertyResponse>> getAll() throws Exception{
        return ResponseEntity.ok(propertyService.getAll());
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void register(
            @RequestHeader(name = HttpHeaders.AUTHORIZATION) String token,
            @RequestParam("title") String title,
            @RequestParam("category") String category,
            @RequestParam("subCategory") String subCategory,
            @RequestParam("description") String description,
            @RequestParam("value") double value,
            @RequestParam("active") boolean active,
            @RequestParam("images") List<MultipartFile> images,
            @RequestParam("country") String country,
            @RequestParam("city") String city
    ) throws Exception {
        PropertyRequest propertyRequest = new PropertyRequest(title, category, subCategory, description, value, active, images, country, city);
        propertyService.save(token, propertyRequest);
    }


    @PutMapping()
    public void update(@RequestHeader(name = HttpHeaders.AUTHORIZATION) String token, @RequestBody PropertyRequest body) throws Exception {
        propertyService.save(token, body);
    }

    @DeleteMapping()
    public void delete(@RequestBody PropertyRequest body) throws Exception{
        propertyService.delete(String.valueOf(body));
    }
    
}
