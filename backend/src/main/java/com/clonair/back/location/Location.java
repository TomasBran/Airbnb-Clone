
package com.clonair.back.location;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

@Data
@Entity
public class Location {

    @Id
    @GeneratedValue(generator= "uuid")
    @GenericGenerator(name= "uuid", strategy = "uuid2")
    private String id;

    private String country;
    private String city;
    
}
