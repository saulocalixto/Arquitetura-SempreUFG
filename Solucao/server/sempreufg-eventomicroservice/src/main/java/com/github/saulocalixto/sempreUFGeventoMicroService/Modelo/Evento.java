/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.github.saulocalixto.sempreUFGeventoMicroService.Modelo;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotEmpty;

@Entity
@Table(name = "`evento`")
public class Evento implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    
    @NotEmpty(message = "Assunto obrigatório")
    private String assunto;
    
    @NotEmpty(message = "Descrição é obrigatória")
    private String descricao;
    
    @NotNull(message = "Data obrigatória")
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd/MM/yyyy")
    private Date dataHoraSolicitacaoDivulgacao;
    
    public void setAssunto(String assunto) {
        this.assunto = assunto;
    }
    
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    
    public void setDataHoraSolicitacaoDivulgacao(Date data) {
        this.dataHoraSolicitacaoDivulgacao = data;
    }

    public Integer getId() {
        return id;
    }

    public String getAssunto() {
        return assunto;
    }

    public String getDescricao() {
        return descricao;
    }

    public Date getDataHoraSolicitacaoDivulgacao() {
        return dataHoraSolicitacaoDivulgacao;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    
    @Override
    public String toString() {
        return Utilitarios.getBuffer().append("Assunto Evento: ")
                .append(assunto)
                .append("\nDescrição: ")
                .append(descricao)
                .append("\nData e Hora: ")
                .append(Utilitarios.formataData(dataHoraSolicitacaoDivulgacao))
                .toString();
    }
}