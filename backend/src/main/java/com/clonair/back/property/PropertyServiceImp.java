package com.clonair.back.property;

import com.clonair.back.image.Image;
import com.clonair.back.image.ImageService;
import com.clonair.back.location.Location;
import java.util.List;
import java.util.Optional;
import com.clonair.back.security.service.JwtService;
import com.clonair.back.user.Role;
import com.clonair.back.user.User;
import com.clonair.back.user.UserService;
import java.util.ArrayList;
import java.util.stream.Collectors;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import static com.clonair.back.security.utils.Utils.obtenerUserDetails;

@Service
@Data
@RequiredArgsConstructor
public class PropertyServiceImp implements PropertyService {

    private final JwtService jwtService;
    private final PropertyRepository propertyRepository;
    private final ImageService imageService;
    private final UserService userService;

    @Override
    public PropertyResponse getOne(String id) throws Exception {
        Property property = propertyRepository.findById(id)
                .orElseThrow(() -> new Exception("Property not found"));
        return propertyToResponseMap(property);
    }

    public void save(String jwtToken, PropertyRequest request) throws Exception {
        if (jwtToken != null && jwtToken.startsWith("Bearer ")) {
            String token = jwtToken.substring(7); // Extrae el token JWT sin el prefijo "Bearer "

            UserDetails userDetails = obtenerUserDetails(); // Obtén los UserDetails necesarios

            if (jwtService.isTokenValid(token, userDetails)) { // Validación del token JWT con los UserDetails
                Optional<User> userOptional = userService.findByUsername(userDetails.getUsername()); // Buscar el usuario por su nombre de usuario(email en este caso)
                User user = userOptional.orElse(null); // Obtener el User del Optional

                if (user != null && user.getRole() == Role.OWNER) {
                    // Crear una nueva propiedad sin establecer su ID explícitamente
                    Property property = requestToPropertyMap(request);
                    property.setUser(user);
                    propertyRepository.save(property);
                } else {
                    throw new Exception("El usuario no es un OWNER");
                }
            } else {
                throw new Exception("Invalid JWT token");
            }
        } else {
            throw new Exception("Authorization token is missing or invalid");
        }
    }

    @Override
    public List<PropertyResponse> getAll() throws Exception {
        return propertyRepository.findAll()
                                 .stream()
                                 .map(this::propertyToResponseMap)
                                 .toList();
    }

    @Override
    public List<PropertyResponse> filtered(String category) throws Exception {
        return propertyRepository.findByCategory(Category.valueOf(category))
                                 .stream()
                                 .map(this::propertyToResponseMap)
                                 .toList();
    }

    @Override
    public void delete(String id) throws Exception {
        Property property = propertyRepository.findById(id)
                                              .orElseThrow(() -> new Exception("Property not found"));
        propertyRepository.delete(property);
    }

    private Property requestToPropertyMap(PropertyRequest request) throws Exception {
        Property property = new Property();

        // Crear una nueva instancia de Location para esta propiedad
        Location location = new Location();
        location.setCountry(request.country());
        location.setCity(request.city());

        // Configurar los datos en la entidad Property
        property.setCategory(Category.valueOf(request.category()));
        property.setDescription(request.description());
        property.setValue(request.value());
        property.setLocation(location); // Asignar la nueva instancia de Location a la Property

        // Guardar las imágenes y establecerlas en la propiedad
        List<Image> images = imageService.saveMulti(request.images());
        property.setImages(images);

        // Manejar subCategory y active (si son nulos, no establecerlos)
        if (request.subCategory() != null) {
            property.setSubCategory(SubCategory.valueOf(request.subCategory()));
        }
        if (request.active() != null) {
            property.setActive(request.active());
        }
        return property;
    }

    private PropertyResponse propertyToResponseMap(Property property) {
        return new PropertyResponse(
                property.getId(),
                property.getUser(),
                property.getCategory(),
                property.getSubCategory(),
                property.getDescription(),
                property.getValue(),
                property.isActive(),
                property.getImages()
                        .stream()
                        .map(Image::getUrl)
                        .collect(Collectors.toList()),
                property.getLocation(),
                new ArrayList<>()
        );
    }

}
