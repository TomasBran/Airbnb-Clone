package com.clonair.back.security.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Este DTO se utiliza al recibir una solicitud de inicio de sesión.
 * El controlador AuthController utiliza este objeto para deserializar los datos enviados desde el cliente en un objeto Java
 * y luego pasar esos datos al servicio de autenticación (AuthService) para procesar la solicitud.
 * */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginRequest {

    String username;
    String password;

}
