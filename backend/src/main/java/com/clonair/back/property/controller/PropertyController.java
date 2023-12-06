
package com.clonair.back.property.controller;

import com.clonair.back.property.entity.dto.PropertyRequest;
import com.clonair.back.property.entity.dto.PropertyResponse;
import com.clonair.back.property.service.PropertyService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/property")
public class PropertyController {
    
    private final PropertyService propertyService;
    
    @GetMapping("{id}")
    public ResponseEntity<PropertyResponse> getOne(@RequestBody PropertyRequest body) throws Exception{
        return ResponseEntity.ok(propertyService.getOne(body.id()));
    }
    
    @GetMapping()
    public ResponseEntity<List<PropertyResponse>> getAll() throws Exception{
        return ResponseEntity.ok(propertyService.getAll());
    }
    
    @PostMapping()
    public void register(@RequestBody PropertyRequest body) throws Exception{
        propertyService.save(body);
    }
    
    @PutMapping()
    public void update(@RequestBody PropertyRequest body) throws Exception{
        propertyService.save(body);
    }
    
    @DeleteMapping()
    public void delete(@RequestBody PropertyRequest body) throws Exception{
        propertyService.delete(body.id());
    }
    
}
