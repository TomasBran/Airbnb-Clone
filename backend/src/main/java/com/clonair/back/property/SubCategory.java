
package com.clonair.back.property;

public enum SubCategory {
    PLAYA("Playa"),
    LAGO("Lago"),
    MONTANA("Montaña"),
    CAMPO("Campo"),  
    PILETA("Pileta"),  
    URBANA("Urbana"),  
    TROPICAL("Tropical"),  
    CABANA("Cabaña"),  
    CAMPING("Camping");  
    
    private String value;
    
    SubCategory(String value){
        this.value = value;
    }
    
    public String getValue(){
        return this.value;
    }
    
}