package com.github.saulocalixto.sempreUFGEurekaServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class SempreUfgEurekaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(SempreUfgEurekaServerApplication.class, args);
	}
}
