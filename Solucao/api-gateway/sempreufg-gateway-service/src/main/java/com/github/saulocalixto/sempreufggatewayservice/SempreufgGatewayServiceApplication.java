package com.github.saulocalixto.sempreufggatewayservice;

import com.github.saulocalixto.sempreufggatewayservice.filtros.AuthHeaderFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaClient
@EnableZuulProxy
public class SempreufgGatewayServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SempreufgGatewayServiceApplication.class, args);
	}
        
        @Bean
        AuthHeaderFilter authHeaderFilter() {
            return new AuthHeaderFilter();
        }
}
