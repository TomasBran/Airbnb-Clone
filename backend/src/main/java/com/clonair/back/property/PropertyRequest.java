
package com.clonair.back.property;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public record PropertyRequest(
        String title,
        String category,
        String subCategory,
        String description,
        double value,
        Boolean active,
        List<MultipartFile> images,
        String country,
        String city
    ){}
