
package com.clonair.back.property;

import org.springframework.web.multipart.MultipartFile;

public record PropertyRequest(
    String category,
    String subCategory,
    String description,
    double value,
    Boolean active,
    MultipartFile[] images,
    String country,
    String city        
    ){}
