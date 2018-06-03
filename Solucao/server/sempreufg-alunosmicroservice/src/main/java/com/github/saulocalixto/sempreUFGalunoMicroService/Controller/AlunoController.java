/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.github.saulocalixto.sempreUFGalunoMicroService.Controller;

import com.github.saulocalixto.sempreUFGalunoMicroService.Modelo.Aluno;
import com.github.saulocalixto.sempreUFGalunoMicroService.Service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/aluno", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(maxAge = 3600)
public class AlunoController {

    @Autowired
    private AlunoService alunoService;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Aluno> save(@RequestBody  Aluno evento){
        return ResponseEntity.ok(alunoService.save(evento));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Aluno> findById(@PathVariable("id") Integer id){
        return ResponseEntity.ok(alunoService.findById(id));
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Iterable<Aluno>> findAll(){
        return ResponseEntity.ok().body(alunoService.findAll());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable("id") Integer id){
        alunoService.delete(id);
        return ResponseEntity.ok().build();
    }
}