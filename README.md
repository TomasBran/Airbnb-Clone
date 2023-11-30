# c15-33-ft-java-react

<h1 align="center"> 👨‍💻 Proyecto de c15-33-ft-java-react: Clon de Airbnb 🚀 </h1>

<h2> 💎 Team ✨ </h2>

<dd>
    <a href="https://www.linkedin.com/in/tomas-augusto-bran-70745616a/" target="blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="logoLinkedin" width="100" height="25" target="blank"/></a>  
    Tomas Augusto Bran | Front End 👨‍💻 
</dd> <br>
<dd>
    <a href="https://www.linkedin.com/in/leandro-rossi-a964a020/" target="blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="logoLinkedin" width="100" height="25" target="blank"/></a>  
    Leandro Rossi | Front End 👨‍💻 
</dd> <br>
<dd>
    <a href="https://www.linkedin.com/in/brayan-sanchez-2355b1199/" target="blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="logoLinkedin" width="100" height="25" target="blank"/></a>  
    Brayan Sanchez | Front End 👨‍💻 
</dd> <br>
<dd>
    <a href="https://www.linkedin.com/in/franciscoziegler/" target="blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="logoLinkedin" width="100" height="25" target="blank"/></a>  
    Francisco Ziegler | Back End 👨‍💻 
</dd> <br>
<dd>
    <a href="https://www.linkedin.com/in/matias-nicolas-acevedo/" target="blank"><img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="logoLinkedin" width="100" height="25" target="blank"/></a>  
    Matias Nicolas Acevedo | Back End 👨‍💻 
</dd> <br>


<h2 align="left">🛠 Language and tools ⚒ </h2>

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="40" alt="java logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" height="40" alt="spring logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" alt="mysql logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" alt="git logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="40" alt="docker logo"  />
</div>

<br>

<h2> 🔐 Spring Security Integrado - Flujo de Trabajo 🔑 </h2>

☑ INFO: <br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- El flujo comienza desde las solicitudes de autenticación o registro, <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pasa por la verificación de credenciales y generación de tokens, <br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continúa con la validación y establecimiento de la autenticación, <br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y finalmente permite el acceso a recursos protegidos para usuarios autenticados. <br>

✅ Solicitud de autenticación o registro: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Desde el cliente, se envían solicitudes HTTP POST al endpoint correspondiente (/auth/register o /auth/login)  <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;con credenciales de usuario o información para el registro. <br>

✅ Controlador (AuthController): <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- El controlador recibe las solicitudes y delega la lógica a los métodos register o login en AuthService. <br>

✅ Servicio (AuthService): <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- En el método register: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Se crea un nuevo usuario utilizando la información proporcionada. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- La contraseña se codifica usando PasswordEncoder. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Se guarda el usuario en la base de datos a través de UserRepository. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Se genera un token JWT para el nuevo usuario y se devuelve en la respuesta AuthResponse. <br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- En el método login: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Se utiliza AuthenticationManager para autenticar al usuario con las credenciales proporcionadas. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Se busca al usuario en la base de datos mediante UserRepository. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Se genera un token JWT utilizando JwtService. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Se devuelve la respuesta AuthResponse con el token. <br>

✅ Autenticación y Seguridad (SecurityConfig): <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- La configuración de seguridad de Spring se encarga de validar las solicitudes entrantes  <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y gestionar la autenticación. <br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- La clase JwtAuthenticationFilter actúa como un filtro de seguridad. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Intercepta las solicitudes para verificar la presencia y validez del token JWT  <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;en el encabezado de autorización. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Si el token es válido, establece la información de autenticación <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;en el contexto de seguridad (SecurityContextHolder). <br>

✅ Acceso a recursos protegidos: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Después de la autenticación exitosa, los usuarios pueden acceder a los recursos protegidos,  <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;como el endpoint /api/v1/demo. <br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- El controlador DemoController proporciona acceso a este recurso, pero este solo está disponible  <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;para usuarios autenticados. <br>

✅ Generación y validación de tokens (JwtService): <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- JwtService se encarga de la generación y validación de los tokens JWT. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Genera tokens con información de usuario y tiempos de expiración. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Valida la autenticidad y el tiempo de expiración de los tokens durante el proceso de filtrado. <br>
    
