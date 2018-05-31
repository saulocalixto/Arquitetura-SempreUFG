package com.github.saulocalixto.sempreUFGConfigServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class SempreUfgConfigServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(SempreUfgConfigServerApplication.class, args);
	}
}
