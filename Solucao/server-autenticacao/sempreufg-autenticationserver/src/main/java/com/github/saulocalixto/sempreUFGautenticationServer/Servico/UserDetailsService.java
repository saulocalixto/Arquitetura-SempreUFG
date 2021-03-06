/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.github.saulocalixto.sempreUFGautenticationServer.Servico;

import java.util.ArrayList;
import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.github.saulocalixto.sempreUFGautenticationServer.Modelo.Authority;
import com.github.saulocalixto.sempreUFGautenticationServer.Modelo.User;
import com.github.saulocalixto.sempreUFGautenticationServer.Repositorio.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;

@Service
@Transactional
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService{
	
	UserRepository userRepository;
        @Autowired
        PasswordEncoder passwordEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return userRepository.findByUsername(username)
								.map(user -> new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getGrantedAuthorities(user)))
								.orElseThrow(() -> new UsernameNotFoundException("User "+username+" Not found"));
	}

	@Autowired
	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
        
        public User save(@Validated User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return this.userRepository.save(user);
    }
	
	private Collection<GrantedAuthority> getGrantedAuthorities(User user){
    	Collection<GrantedAuthority> grantedAuthorities = new ArrayList<>();
        for (Authority authority : user.getAuthorities()) {
            GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(authority.getName());
            grantedAuthorities.add(grantedAuthority);
        }
        
        return grantedAuthorities;
    }
}