package com.clonair.back.security.filter;

import com.clonair.back.security.service.JwtService;
import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

/**
 * Esta clase es responsable de interceptar las solicitudes entrantes,
 * validar los tokens JWT y establecer la autenticación en el contexto de seguridad si el token es válido.
 * */
@Component // @Component marca esta clase como un componente para ser escaneado y manejado por Spring como un bean.
@RequiredArgsConstructor // Genera automáticamente un constructor que incluya todos los campos marcados como final en una clase.
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService; // Service que maneja la generación, validación y extracción de tokens JWT.
    private final UserDetailsService userDetailsService; // Se utiliza para cargar los detalles del usuario a partir del nombre de usuario extraído del token JWT.

    /**
     * Este método se encarga de procesar las solicitudes entrantes y realizar la validación del token JWT.
     * Se ejecuta en cada solicitud HTTP.
     * */
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        final String token = getTokenFromRequest(request); // Se extrae el token JWT de la solicitud y se verifica si existe.
        final String username;

        // Si no hay token presente, se permite que la solicitud continúe sin autenticación (pasando por el FilterChain).
        if (token == null) {
            filterChain.doFilter(request, response);
            return;
        }

        // Se obtiene el nombre de usuario del token JWT.
        username = jwtService.getUsernameFromToken(token);

        // Verifica si se pudo extraer un nombre de usuario del token JWT. Y Comprueba si no hay ninguna autenticación actualmente establecida en el contexto de seguridad.
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            // Se carga la información del usuario desde el UserDetailsService utilizando el nombre de usuario extraído del token JWT.
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);

            // Se verifica si el token JWT es válido para el usuario actual.
            if (jwtService.isTokenValid(token, userDetails)) {

                // Se crea un objeto utilizado por Spring Security para representar información de autenticación.
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities());

                // Se agregan detalles adicionales sobre la autenticación, proporcionados por WebAuthenticationDetailsSource, como la dirección IP, la sesión, el agente de usuario, etc.
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext() // Se proporciona acceso al contexto de seguridad de la aplicación.
                        .setAuthentication(authToken); // Se establece la autenticación actual (authToken) en el contexto de seguridad, lo que significa que el usuario asociado con userDetails está ahora autenticado en la sesión actual.
            }
        }
        // Después de procesar la solicitud, se llama a filterChain.doFilter() para continuar con el flujo normal de la solicitud.
        filterChain.doFilter(request, response);
    }

    /**
     * Este método extrae el token JWT del encabezado de autorización de la solicitud.
     * Busca si el encabezado comienza con "Bearer " y luego devuelve el token.
     * */
    private String getTokenFromRequest(HttpServletRequest request) {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        if(StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")) {
            return authHeader.substring(7);
        }
        return null;
    }

}
