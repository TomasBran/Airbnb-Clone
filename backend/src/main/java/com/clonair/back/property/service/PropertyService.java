
package com.clonair.back.property.service;

import com.clonair.back.property.entity.dto.PropertyRequest;
import com.clonair.back.property.entity.dto.PropertyResponse;
import java.util.List;

public interface PropertyService {
    
    public PropertyResponse getOne(String id) throws Exception;
    
    public void save(PropertyRequest property) throws Exception;
    
    public List<PropertyResponse> getAll() throws Exception;
    
    public List<PropertyResponse> filtered(String category) throws Exception;
    
    public void delete(String id) throws Exception;
    
}
