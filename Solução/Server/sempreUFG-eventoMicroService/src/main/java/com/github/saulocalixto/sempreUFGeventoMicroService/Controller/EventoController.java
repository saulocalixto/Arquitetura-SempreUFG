/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.github.saulocalixto.sempreUFGeventoMicroService.Controller;

import com.github.saulocalixto.sempreUFGeventoMicroService.Modelo.Evento;
import com.github.saulocalixto.sempreUFGeventoMicroService.Service.EventoService;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/evento", produces = MediaType.APPLICATION_JSON_VALUE)
public class EventoController {

    @Autowired
    private EventoService eventoService;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Evento> save(@RequestBody  Evento evento){
        return ResponseEntity.ok(eventoService.save(evento));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Evento> findById(@PathVariable("id") Integer id){
        return ResponseEntity.ok(eventoService.findById(id));
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Iterable<Evento>> findAll(){
        return ResponseEntity.ok().body(eventoService.findAll());
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable("id") Integer id){
        eventoService.delete(id);
        return ResponseEntity.ok().build();
    }
}