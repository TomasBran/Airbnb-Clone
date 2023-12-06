
package com.clonair.back.property.repository;

import com.clonair.back.property.entity.Property;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepository extends JpaRepository<Property,String> {
    
    public List<Property> findByCategory(String category);
    
}