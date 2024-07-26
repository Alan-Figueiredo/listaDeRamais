package com.ListContact.ListContact.controller;

import com.ListContact.ListContact.model.user.User;
import com.ListContact.ListContact.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

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
