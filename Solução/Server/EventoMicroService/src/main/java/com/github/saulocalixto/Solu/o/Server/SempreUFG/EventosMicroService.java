package com.github.saulocalixto.Solu.o.Server.SempreUFG;

import Model.Evento;
import java.util.Date;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;

@EnableAutoConfiguration(exclude = {ErrorMvcAutoConfiguration.class})
@SpringBootApplication
public class EventosMicroService {

	public static void main(String[] args) {
		SpringApplication.run(EventosMicroService.class, args);
	}
}
