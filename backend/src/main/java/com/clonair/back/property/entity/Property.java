
package com.clonair.back.property.entity;

import com.clonair.back.image.entity.Image;
import com.clonair.back.location.entity.Location;
import com.clonair.back.owner.entity.Owner;
import com.clonair.back.property.enumeration.Category;
import com.clonair.back.property.enumeration.SubCategory;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import java.util.List;
import lombok.Data;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.GenericGenerator;

@Data
@Entity
public class Property {
    
    @Id
    @GeneratedValue (generator= "uuid")
    @GenericGenerator (name= "uuid", strategy = "uuid2")
    private String id;
    private Category category;
    private SubCategory subCategory;
    private String description;
    private double value;
    private boolean active;
    @ManyToOne
    private Owner owner;
    @OneToOne
    @Cascade(value = CascadeType.ALL)
    private Location location;
    @OneToMany
    private List<Image> images;
    
}
