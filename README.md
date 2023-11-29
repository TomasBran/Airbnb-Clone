# c15-33-ft-java-react

<h1> Proyecto de c15-33-ft-java-react: Clon de Airbnb </h1>

<h2> 🔸 Spring Security Integrado - Flujo de Trabajo 🔸 </h2>

☑ INFO: El flujo comienza desde las solicitudes de autenticación o registro, <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pasa por la verificación de credenciales y generación de tokens, <br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continúa con la validación y establecimiento de la autenticación, <br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y finalmente permite el acceso a recursos protegidos para usuarios autenticados. <br>

✅ Solicitud de autenticación o registro: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Desde el cliente, se envían solicitudes HTTP POST al endpoint correspondiente (/auth/login o /auth/register)  <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;con credenciales de usuario o información para el registro. <br>

✅ Controlador (AuthController): <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- El controlador recibe las solicitudes y delega la lógica a los métodos login o register en AuthService. <br>

✅ Servicio (AuthService): <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- En el método login: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Se utiliza AuthenticationManager para autenticar al usuario con las credenciales proporcionadas. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Se busca al usuario en la base de datos mediante UserRepository. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Se genera un token JWT utilizando JwtService. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Se devuelve la respuesta AuthResponse con el token. <br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- En el método register: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Se crea un nuevo usuario utilizando la información proporcionada. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- La contraseña se codifica usando PasswordEncoder. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Se guarda el usuario en la base de datos a través de UserRepository. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Se genera un token JWT para el nuevo usuario y se devuelve en la respuesta AuthResponse. <br>

✅ Autenticación y Seguridad (SecurityConfig): <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- La configuración de seguridad de Spring se encarga de validar las solicitudes entrantes y gestionar la autenticación. <br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- La clase JwtAuthenticationFilter actúa como un filtro de seguridad. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Intercepta las solicitudes para verificar la presencia y validez del token JWT en el encabezado de autorización. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Si el token es válido, establece la información de autenticación en el contexto de seguridad (SecurityContextHolder). <br>

✅ Acceso a recursos protegidos: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Después de la autenticación exitosa, los usuarios pueden acceder a los recursos protegidos, como el endpoint /api/v1/demo. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- El controlador DemoController proporciona acceso a este recurso, pero este solo está disponible para usuarios autenticados. <br>

✅ Generación y validación de tokens (JwtService): <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- JwtService se encarga de la generación y validación de los tokens JWT. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Genera tokens con información de usuario y tiempos de expiración. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Valida la autenticidad y el tiempo de expiración de los tokens durante el proceso de filtrado. <br>
    
