package com.james.myspringboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;

@SpringBootApplication
//告诉springboot，是一个入口类，运行它就能启动SB
//会自动扫描可以被注入的类，并初始化
//@Repository,@Controller,@Component,@EntityScan

public class MySpringBootApplication {
    public static void main(String[] args) {
        //启动springboot，并初始化相关的组件
        SpringApplication.run(MySpringBootApplication.class);
    }
}
