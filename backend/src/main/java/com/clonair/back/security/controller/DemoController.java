package com.clonair.back.security.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class DemoController {

    // Es un controlador de demostración con un punto final /api/v1/demo que solo está accesible para usuarios autenticados.
    @PostMapping(value = "demo")
    public String welcome(){
        return "Welcome from secure endpoint";
    }
}
