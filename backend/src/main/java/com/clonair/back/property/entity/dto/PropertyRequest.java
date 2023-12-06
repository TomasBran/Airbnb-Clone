
package com.clonair.back.property.entity.dto;

import org.springframework.web.multipart.MultipartFile;

public record PropertyRequest(
    String id,
    String category,
    String subCategory,
    String description,
    double value,
    boolean active,
    MultipartFile[] images,
    String country,
    String city        
    ){}
