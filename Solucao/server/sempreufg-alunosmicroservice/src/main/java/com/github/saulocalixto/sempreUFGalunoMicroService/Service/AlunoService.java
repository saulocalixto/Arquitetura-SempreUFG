/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.github.saulocalixto.sempreUFGalunoMicroService.Service;

import com.github.saulocalixto.sempreUFGalunoMicroService.Modelo.Aluno;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import com.github.saulocalixto.sempreUFGalunoMicroService.Repository.AlunoRepository;
import javax.transaction.Transactional;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository alunoRepository;

    public Aluno save(@Validated Aluno aluno) {
        return alunoRepository.save(aluno);
    }

    public Aluno findById(Integer id){
        return alunoRepository.findOne(id);
    }

    public Iterable<Aluno> findAll(){
        return alunoRepository.findAll();
    }

    public void delete(Integer id) {
        alunoRepository.delete(id);
    }
}