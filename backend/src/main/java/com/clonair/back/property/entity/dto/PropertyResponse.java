
package com.clonair.back.property.entity.dto;

import com.clonair.back.location.entity.Location;
import com.clonair.back.owner.entity.Owner;
import com.clonair.back.property.enumeration.Category;
import com.clonair.back.property.enumeration.SubCategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


public record PropertyResponse(
        String id,
        Owner owner,
        Category category,
        SubCategory subCategory,
        String description,
        double value,
        boolean active,
        List<String> images,
        Location location,
        List<String> availability
        ){}
