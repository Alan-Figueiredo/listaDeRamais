package com.ListContact.ListContact.controller;


import com.ListContact.ListContact.model.user.AuthDto;
import com.ListContact.ListContact.model.user.LoginResponseDto;
import com.ListContact.ListContact.model.user.RegisterDto;
import com.ListContact.ListContact.model.user.User;
import com.ListContact.ListContact.repository.UserRepository;
import com.ListContact.ListContact.security.TokenService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login (@RequestBody @Valid AuthDto data) {

        var userNamePassword = new UsernamePasswordAuthenticationToken(data.username(),data.password());
        var auth = this.authenticationManager.authenticate(userNamePassword);
        var token = tokenService.generateToken((User) auth.getPrincipal());
        return ResponseEntity.ok(new LoginResponseDto(token));
    }

    @PostMapping("/register")
    public ResponseEntity register (@RequestBody @Valid RegisterDto data){

        if(userRepository.findByUsername(data.username()) != null) return ResponseEntity.badRequest().build();
        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        User newUser = new User(data.username(),encryptedPassword,data.role());
        this.userRepository.save(newUser);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/users")
    public List<User> ListAllUser(){
        return userRepository.findAll();
    }

    @GetMapping("/users/{idUser}")
    public ResponseEntity<User> listUserById(@PathVariable @Valid String idUser){
        return userRepository.findById(idUser)
                .map(result -> ResponseEntity.ok().body(result))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/users/{idUser}")
    public ResponseEntity deleteUserById(@RequestBody @Valid String idUser){
        return userRepository.findById(idUser)
                .map(result -> {
                    userRepository.delete(result);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
