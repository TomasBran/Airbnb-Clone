# c15-33-ft-java-react
Proyecto de c15-33-ft-java-react: Clon de Airbnb

🔸 Spring Security Integrado - Flujo de Trabajo 🔸

☑ INFO: El flujo comienza desde las solicitudes de autenticación o registro, 
    pasa por la verificación de credenciales y generación de tokens, 
    continúa con la validación y establecimiento de la autenticación, 
    y finalmente permite el acceso a recursos protegidos para usuarios autenticados.

✅ Solicitud de autenticación o registro:
    ~ Desde el cliente, se envían solicitudes HTTP POST al endpoint correspondiente (/auth/login o /auth/register) 
    con credenciales de usuario o información para el registro.

✅ Controlador (AuthController):
    ~ El controlador recibe las solicitudes y delega la lógica a los métodos login o register en AuthService.

✅ Servicio (AuthService):
    ~ En el método login:
        - Se utiliza AuthenticationManager para autenticar al usuario con las credenciales proporcionadas.
        - Se busca al usuario en la base de datos mediante UserRepository.
        - Se genera un token JWT utilizando JwtService.
        - Se devuelve la respuesta AuthResponse con el token.

    ~ En el método register:
        - Se crea un nuevo usuario utilizando la información proporcionada.
        - La contraseña se codifica usando PasswordEncoder.
        - Se guarda el usuario en la base de datos a través de UserRepository.
        - Se genera un token JWT para el nuevo usuario y se devuelve en la respuesta AuthResponse.

✅ Autenticación y Seguridad (SecurityConfig):
    ~ La configuración de seguridad de Spring se encarga de validar las solicitudes entrantes y gestionar la autenticación.

    ~ La clase JwtAuthenticationFilter actúa como un filtro de seguridad.
        - Intercepta las solicitudes para verificar la presencia y validez del token JWT en el encabezado de autorización.
        - Si el token es válido, establece la información de autenticación en el contexto de seguridad (SecurityContextHolder).

✅ Acceso a recursos protegidos:
    ~ Después de la autenticación exitosa, los usuarios pueden acceder a los recursos protegidos, como el endpoint /api/v1/demo.
    ~ El controlador DemoController proporciona acceso a este recurso, pero este solo está disponible para usuarios autenticados.

✅ Generación y validación de tokens (JwtService):
    ~ JwtService se encarga de la generación y validación de los tokens JWT.
    ~ Genera tokens con información de usuario y tiempos de expiración.
    ~ Valida la autenticidad y el tiempo de expiración de los tokens durante el proceso de filtrado.