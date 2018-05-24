package Model;

import java.util.Date;

public class Evento {

    private String assunto;
    private String descricao;
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