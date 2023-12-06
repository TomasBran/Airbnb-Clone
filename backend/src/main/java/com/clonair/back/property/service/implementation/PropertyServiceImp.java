
package com.clonair.back.property.service.implementation;

import com.clonair.back.image.service.ImageService;
import com.clonair.back.location.entity.Location;
import com.clonair.back.owner.entity.Owner;
import com.clonair.back.owner.service.OwnerService;
import com.clonair.back.property.entity.Property;
import com.clonair.back.property.enumeration.Category;
import com.clonair.back.property.enumeration.SubCategory;
import com.clonair.back.property.entity.dto.PropertyRequest;
import com.clonair.back.property.entity.dto.PropertyResponse;
import com.clonair.back.property.repository.PropertyRepository;
import com.clonair.back.property.service.PropertyService;
import java.util.List;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Data
@RequiredArgsConstructor
public class PropertyServiceImp implements PropertyService {
    
    private final PropertyRepository propertyRepository;
    private final ImageService imageService;
    private final OwnerService ownerService;

    @Override
    public PropertyResponse getOne(String id) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void save(PropertyRequest request) throws Exception {
        propertyRepository.save(requestToPropertyMap(request));
    }

    @Override
    public List<PropertyResponse> getAll() throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public List<PropertyResponse> filtered(String category) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void delete(String id) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
    
    private Property requestToPropertyMap(PropertyRequest request) throws Exception{    
        Owner owner = ownerService.getOwnerByRequest(request.token());
        Location location = new Location();
        Property property = new Property();
        if(request.id()!=null){
            property = propertyRepository.getOne(request.id());
            location = property.getLocation();            
        }
        location.setCountry(request.country());
        location.setCity(request.city());
        property.setCategory( Category.valueOf(request.category()));
        property.setDescription(request.description());
        property.setValue(request.value());
        property.setLocation(location);
        property.setImages(imageService.saveMulti(request.images()));
        if(request.subCategory()!=null){
            property.setSubCategory( SubCategory.valueOf(request.subCategory()));        
        }
        if(request.active()!=null){
            property.setActive(request.active());
        }
        return property;
    }
    
    private PropertyResponse propertyToResponseMap(Property property){
        
        
    }
    
}
