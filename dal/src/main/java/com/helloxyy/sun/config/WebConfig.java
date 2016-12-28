package com.helloxyy.sun.config;

import org.springframework.boot.autoconfigure.velocity.VelocityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.velocity.VelocityLayoutViewResolver;


/**
 * WEB配置
 */
@Configuration
@EnableWebMvc
public class WebConfig extends WebMvcConfigurerAdapter {




    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**")
                .addResourceLocations("classpath:/static/");
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // add default page
      //  registry.addViewController("/acl/permissions.htm").setViewName("common/permissions");
        registry.addViewController("/index.htm").setViewName("index");
        registry.addViewController("/").setViewName("screen/index");
    }

    @Bean(name = "velocityViewResolver")
    public VelocityLayoutViewResolver velocityViewResolver(VelocityProperties properties) {
        VelocityLayoutViewResolver resolver = new VelocityLayoutViewResolver();
        resolver.setLayoutUrl("layout/default.vm");
        properties.applyToViewResolver(resolver);
        return resolver;
    }


}
