
package com.clonair.back.property;

import com.clonair.back.image.Image;
import com.clonair.back.location.Location;
import com.clonair.back.user.User;
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

    private String title;
    private Category category;
    private SubCategory subCategory;
    private String description;
    private double value;
    private boolean active;

    @ManyToOne
    @Cascade(value = CascadeType.ALL)
    private User user;

    @OneToOne
    @Cascade(value = CascadeType.ALL)
    private Location location;

    @OneToMany
    private List<Image> images;

    private List<String> availability;

}
