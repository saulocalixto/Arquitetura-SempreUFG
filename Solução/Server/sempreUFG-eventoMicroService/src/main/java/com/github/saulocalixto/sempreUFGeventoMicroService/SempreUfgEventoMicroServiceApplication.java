package com.github.saulocalixto.sempreUFGeventoMicroService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class SempreUfgEventoMicroServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SempreUfgEventoMicroServiceApplication.class, args);
	}
}
