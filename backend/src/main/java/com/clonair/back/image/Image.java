
package com.clonair.back.image;

import com.clonair.back.property.Property;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

@Data
@Entity
public class Image {
    
    @Id
    @GeneratedValue (generator= "uuid")
    @GenericGenerator (name= "uuid", strategy = "uuid2")
    private String id;

    private String mime;

    private String name;

    //Lob es la anotación de JPA para indicar objetos grandes
    @Lob @Basic(fetch = FetchType.LAZY)
    @Column(columnDefinition = "LONGBLOB")
    private byte[] content;

    private String url;

    @ManyToOne
    @JoinColumn(name = "property_id") // Nombre de la columna en la tabla Image que referencia a Property
    private Property property;

}
