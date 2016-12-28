package com.helloxyy.sun.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by xyy on 16-12-28.
 */
@Controller
@RequestMapping(value = "/", produces = "text/html;charset=UTF-8")
public class IndexController {

    @RequestMapping("/")
    public String index(ModelMap context) {

        context.put("name", "程序员的微生活");
        return "screen/index";
    }

    @RequestMapping("/1")
    @ResponseBody()
    public String hello() {
        return "你好";
    }

    @RequestMapping("/test")
    @ResponseBody()
    public String mama(@RequestParam String name) {
        System.out.println(name);
        return "mama";
    }

}
