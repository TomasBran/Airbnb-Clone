
package com.clonair.back.owner.entity;

import com.clonair.back.user.entity.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.PrePersist;

@Entity
public class Owner {
    
    @Id
    private String id;
    private User user;
    private String contact;
    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String description;
    
    @PrePersist
    public void prePersist(){
        this.id = user.getId();
    }
}
