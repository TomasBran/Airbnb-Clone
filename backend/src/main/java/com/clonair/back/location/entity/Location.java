
package com.clonair.back.location.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Location {
    
    @Id
    private String id;
    private String country;
    private String city;
    
}
