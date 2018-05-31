package com.github.saulocalixto.sempreUFGautenticationServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class SempreUfgAutenticationServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(SempreUfgAutenticationServerApplication.class, args);
	}
}
