
package com.clonair.back.property;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping()
    public void register(@RequestHeader(name = HttpHeaders.AUTHORIZATION) String token, @RequestBody PropertyRequest body) throws Exception {
        propertyService.save(token, body);
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
