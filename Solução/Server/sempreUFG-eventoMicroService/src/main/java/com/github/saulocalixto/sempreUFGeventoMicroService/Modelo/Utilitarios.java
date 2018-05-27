/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.github.saulocalixto.sempreUFGeventoMicroService.Modelo;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author saulo-linux
 */
public class Utilitarios {
    
    private static StringBuffer buffer;
    private static DateFormat dateFormat;
    
    static StringBuffer getBuffer() {
        return buffer == null ? new StringBuffer() : buffer;
    }
    
    static String formataData(Date data) {
        
        return getDateFormat().format(data);
    }
    
    private static DateFormat getDateFormat() {
        return dateFormat == null ? new SimpleDateFormat("dd/MM/yyyy HH:mm:ss") 
                : dateFormat;
    }
}
