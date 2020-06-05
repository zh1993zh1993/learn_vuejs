package com.james.myspringboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Mycontroller {
    @RequestMapping("/out") //绑定到out
    @ResponseBody//直接向浏览器输出
    public String out(){
        System.out.println("---进入out方法");
        return "success";
    }
    @RequestMapping("/html01")
    public String myHtml(){
        return "html01";
    }
    @RequestMapping("/testHtml")
    public String testHtml(){
        return "test";
    }
    @RequestMapping("/checkName")
    @ResponseBody
    public String checkName(String name){
        System.out.println(name+"---------");
        boolean b = false;
        return "{'result': 'ok'}";
    }
    @RequestMapping("/html02")
    public String my2Html(){
        return "html02";
    }
    @RequestMapping("/login")
    @ResponseBody
    public String  login(String username,String password){
        try {
            Thread.sleep(2000);
        }catch (Exception e){
            System.out.println("出现异常");
        }
        System.out.println(username+"---------"+password);
        if("lucy".equals(username) && "1234".equals(password)){
            return "username and password is right";
        }else{
            return "username or password is wrong";}

    }



}
