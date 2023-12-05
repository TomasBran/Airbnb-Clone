
package com.clonair.back.user.entity;

import com.clonair.back.utility.enumeration.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="user", uniqueConstraints = {@UniqueConstraint(columnNames = {"username"})}) // Tiene una restricción única en la columna "username".
public class User implements UserDetails { // Esta interfaz es proporcionada por Spring Security y permite que los objetos User actúen como objetos de usuario autenticables por Spring Security.

    @Id
    @GeneratedValue (generator= "uuid")
    @GenericGenerator(name= "uuid", strategy = "uuid2")
    String id;

    @Basic // Anotación de JPA que marca un campo como persistible, indicando que se debe incluir en las operaciones de persistencia, pero no agrega ninguna configuración adicional por defecto.
    @Column(nullable = false)
    String username; // Se utiliza el email, como username.

    @Column(nullable = false)
    String password;
    String firstname;
    String lastname;
    String country;

    @Enumerated(EnumType.STRING)
    Role role;

    // Métodos implementados por UserDetails.

    /**
     * Este método retorna una colección de autoridades que tiene el usuario.
     * En este caso, se devuelve un SimpleGrantedAuthority basado en el rol del usuario.
     * */
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority((role.name())));
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
