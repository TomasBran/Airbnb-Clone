
package com.clonair.back.property.entity.dto;

import org.springframework.web.multipart.MultipartFile;

public record PropertyRequest(
    String id,
    String token,
    String category,
    String subCategory,
    String description,
    double value,
    Boolean active,
    MultipartFile[] images,
    String country,
    String city        
    ){}
