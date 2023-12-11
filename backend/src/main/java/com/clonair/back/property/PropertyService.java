
package com.clonair.back.property;

import java.util.List;

public interface PropertyService {
    
    public PropertyResponse getOne(String id) throws Exception;
    
    public void save(String jwtToken, PropertyRequest request) throws Exception;
    
    public List<PropertyResponse> getAll() throws Exception;
    
    public List<PropertyResponse> filtered(String category) throws Exception;
    
    public void delete(String id) throws Exception;
    
}
