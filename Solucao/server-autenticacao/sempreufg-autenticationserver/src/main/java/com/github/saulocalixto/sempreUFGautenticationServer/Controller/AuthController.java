/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.github.saulocalixto.sempreUFGautenticationServer.Controller;

import com.github.saulocalixto.sempreUFGautenticationServer.Modelo.User;
import com.github.saulocalixto.sempreUFGautenticationServer.Servico.UserDetailsService;
import java.security.Principal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class AuthController {
    
    @Autowired
    private UserDetailsService userService;

    @RequestMapping("/user")
    public Principal getCurrentLoggedInUser(Principal user) {
        return user;
    }
    
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public ResponseEntity<User> save(@RequestBody  User user){
        return ResponseEntity.ok(userService.save(user));
    }
}