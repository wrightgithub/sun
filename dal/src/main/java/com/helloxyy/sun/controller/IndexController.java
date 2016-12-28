package com.helloxyy.sun.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by xyy on 16-12-28.
 */
@Controller
public class IndexController {
    @RequestMapping("/")
    public String index(ModelMap context){

        context.put("name","程序员的微生活");
        return "screen/index";
    }

    @RequestMapping("/hello")
    @ResponseBody
    public String hello(ModelMap context){

        return "hello";
    }


}
