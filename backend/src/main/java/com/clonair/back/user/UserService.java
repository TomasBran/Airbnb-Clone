
package com.clonair.back.user;

import java.util.Optional;

public interface UserService {

    User findById(String id);

    public Optional<User> findByUsername(String username);
    
}
