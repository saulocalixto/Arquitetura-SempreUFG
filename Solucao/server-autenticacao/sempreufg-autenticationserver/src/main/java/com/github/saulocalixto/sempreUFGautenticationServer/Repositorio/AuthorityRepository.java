/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.github.saulocalixto.sempreUFGautenticationServer.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.saulocalixto.sempreUFGautenticationServer.Modelo.Authority;

public interface AuthorityRepository extends JpaRepository<Authority, String>{
	
	Authority findByName(String name);
	
}