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
import java.util.ArrayList;
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
        Property property = propertyRepository.findById(id)
                .orElseThrow(() -> new Exception("Property not found"));
        return propertyToResponseMap(property);
    }

    @Override
    public void save(PropertyRequest request) throws Exception {
        Property property = requestToPropertyMap(request);
        propertyRepository.save(property);
    }

    @Override
    public List<PropertyResponse> getAll() throws Exception {
        return propertyRepository.findAll().stream().map((prop) -> {
            return propertyToResponseMap(prop);
        }).toList();
    }

    @Override
    public List<PropertyResponse> filtered(String category) throws Exception {
        return propertyRepository.findByCategory(Category.valueOf(category)).stream().map((prop) -> {
            return propertyToResponseMap(prop);
        }).toList();
    }

    @Override
    public void delete(String id) throws Exception {
        Property property = propertyRepository.findById(id)
                .orElseThrow(() -> new Exception("Property not found"));
        propertyRepository.delete(property);
    }

    private Property requestToPropertyMap(PropertyRequest request) throws Exception {
        Owner owner = ownerService.getOwnerByRequest(request.token());
        if (owner == null) {
            throw new Exception("Propietario no encontrado");
        }
        Location location = new Location();
        Property property = new Property();
        // Si el ID está presente en la solicitud, obtenemos la propiedad existente
        if (request.id() != null) {
            property = propertyRepository.findById(request.id())
                    .orElseThrow(() -> new Exception("Property not found"));
            location = property.getLocation();
        }
        // Configuramos los datos en la entidad Property
        location.setCountry(request.country());
        location.setCity(request.city());
        property.setCategory(Category.valueOf(request.category()));
        property.setDescription(request.description());
        property.setValue(request.value());
        property.setLocation(location);
        property.setImages(imageService.saveMulti(request.images()));
        if (request.subCategory() != null) {
            property.setSubCategory(SubCategory.valueOf(request.subCategory()));
        }
        if (request.active() != null) {
            property.setActive(request.active());
        }
        property.setOwner(owner);
        return property;
    }

    private PropertyResponse propertyToResponseMap(Property property) {
        return new PropertyResponse(
                property.getId(),
                property.getOwner(),
                property.getCategory(),
                property.getSubCategory(),
                property.getDescription(),
                property.getValue(),
                property.isActive(),
                property.getImages()
                        .stream().map(
                                (img) -> {
                                    return img.getId();
                                }
                        ).toList(),
                property.getLocation(),
                new ArrayList<>()
        );
    }
}
