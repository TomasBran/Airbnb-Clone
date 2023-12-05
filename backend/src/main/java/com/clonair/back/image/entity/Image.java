
package com.clonair.back.image.entity;

import jakarta.persistence.Basic;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
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
    private byte[] content;
    
}
