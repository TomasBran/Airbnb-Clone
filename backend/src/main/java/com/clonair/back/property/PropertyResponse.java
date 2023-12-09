
package com.clonair.back.property;
import com.clonair.back.location.Location;
import com.clonair.back.user.User;

import java.util.List;

public record PropertyResponse(
        String id,
        String title,
        User user,
        Category category,
        SubCategory subCategory,
        String description,
        double value,
        boolean active,
        List<String> images,
        Location location,
        List<String> availability
        ){}
