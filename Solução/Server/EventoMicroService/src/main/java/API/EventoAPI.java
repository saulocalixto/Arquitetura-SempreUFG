package API;

import Model.Evento;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/token")
public class EventoAPI {
    private final Evento evento;
    @Autowired
    public EventoAPI() {
        evento = new Evento();
        evento.setAssunto("Evento Grande");
        evento.setDataHoraSolicitacaoDivulgacao(new Date());
        evento.setDescricao("Um evento muito louco!");
    }
    
    @RequestMapping(value="/evento", method = RequestMethod.GET)
    public String pegaEvento() {
        return evento.toString();
    }
}