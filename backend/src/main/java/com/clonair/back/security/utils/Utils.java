package com.clonair.back.security.utils;

import com.clonair.back.user.User;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

public class Utils {

    public static UserDetails obtenerUserDetails() {
        // Obtener los UserDetails del contexto de seguridad
        return (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    public static User obtenerUsuarioDesdeUserDetails(UserDetails userDetails) {
        if (userDetails != null && userDetails instanceof User) {
            return (User) userDetails; // Si userDetails es una instancia de tu clase User, haz el cast
        }
        return null;
    }
}
