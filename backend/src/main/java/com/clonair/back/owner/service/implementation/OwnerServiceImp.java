
package com.clonair.back.owner.service.implementation;

import com.clonair.back.owner.entity.Owner;
import com.clonair.back.owner.repository.OwnerRepository;
import com.clonair.back.owner.service.OwnerService;
import com.clonair.back.security.service.JwtService;
import com.clonair.back.user.entity.User;
import com.clonair.back.user.repository.UserRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OwnerServiceImp implements OwnerService{

    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final OwnerRepository ownerRepository;

    @Override
    public Owner getOwnerByRequest(String token) throws Exception {
        Optional<User> opt = userRepository.findByUsername(jwtService.getUsernameFromToken(token));
        if (opt.isPresent()) {
            return ownerRepository.getReferenceById(opt.get().getId());
        }
        // Si no se encuentra el usuario, podrías devolver null o lanzar una excepción, dependiendo de tu lógica de negocio
        throw new RuntimeException("Usuario no encontrado");
        // O podrías devolver null si esa es una opción válida en tu lógica de negocio
        // return null;
    }
}
