
package com.clonair.back.property;

public enum Category {
    CASA("Casa"),
    DEPARTAMENTO("Departamento"),
    CASAHUESPEDES("Casa de huespedes"),
    HOTEL("Hotel");  
    
    private String value;
    
    Category(String value){
        this.value = value;
    }
    
    public String getValue(){
        return this.value;
    }

}
