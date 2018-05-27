/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.github.saulocalixto.sempreUFGeventoMicroService.Service;

import com.github.saulocalixto.sempreUFGeventoMicroService.Modelo.Evento;
import com.github.saulocalixto.sempreUFGeventoMicroService.Repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

@Service
public class EventoService {

    @Autowired
    private EventoRepository eventoRepository;

    public Evento save(@Validated Evento evento) {
        return eventoRepository.save(evento);
    }

    public Evento findById(Integer id){
        return eventoRepository.findOne(id);
    }

    public Iterable<Evento> findAll(){
        return eventoRepository.findAll();
    }

    public void delete(Integer id) {
        eventoRepository.delete(id);
    }
}