package com.github.saulocalixto.sempreUFGalunoMicroService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class SempreUfgAlunoMicroServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SempreUfgAlunoMicroServiceApplication.class, args);
	}
}
