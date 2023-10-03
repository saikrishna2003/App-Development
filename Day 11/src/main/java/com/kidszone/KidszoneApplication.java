package com.kidszone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan({"com"}) 
@EnableJpaRepositories(basePackages = "com.kidszone.repository")
@EntityScan({ "com.kidszone.entity" })
public class KidszoneApplication {

	public static void main(String[] args) {
		SpringApplication.run(KidszoneApplication.class, args);
	}

}
