
package com.clonair.back.owner.service;

import com.clonair.back.owner.entity.Owner;

public interface OwnerService {
    
    public Owner getOwnerByRequest(String token) throws Exception;
    
}
