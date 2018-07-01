package com.github.saulocalixto.sempreufggatewayservice;

import javax.sql.DataSource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.session.jdbc.config.annotation.web.http.EnableJdbcHttpSession;



@SpringBootApplication
@EnableDiscoveryClient
@EnableZuulProxy
@EnableOAuth2Sso
@EnableJdbcHttpSession
public class SempreufgGatewayServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(SempreufgGatewayServiceApplication.class, args);
    }

    @Bean
    public DataSource dataSource() {
        return DataSourceBuilder.create().url("jdbc:mysql://localhost/oauth?verifyServerCertificate=false&useSSL=false&requireSSL=false")
                .username("root").password("1234").driverClassName("com.mysql.jdbc.Driver").build();
    }
}
