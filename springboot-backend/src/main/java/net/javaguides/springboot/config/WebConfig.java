package net.javaguides.springboot.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@Profile("test")
//@Configuration
//@Profile("test")
public class WebConfig implements WebMvcConfigurer{
	@Autowired
	private Environment environment;

//	@Override
//	public void addCorsMappings(CorsRegistry registry) {
//		String reactUrl = environment.getProperty("react.url");
//		System.out.println("==>> reactUrl = " + reactUrl);
//
//		registry.addMapping("/**")
//				.allowedOrigins("*")
//				.allowedMethods("*")
//				.allowCredentials(false)
//				.maxAge(3600);
//	}

}
