
package com.clonair.back.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getOne(@PathVariable String id, @RequestHeader(name = HttpHeaders.AUTHORIZATION) String token) throws Exception {
        return ResponseEntity.ok(userService.getOne(id, token));
    }

    @GetMapping()
    public ResponseEntity<List<UserResponse>> getAll(@RequestHeader(name = HttpHeaders.AUTHORIZATION) String token) throws Exception {
        return ResponseEntity.ok(userService.getAll(token));
    }

}
