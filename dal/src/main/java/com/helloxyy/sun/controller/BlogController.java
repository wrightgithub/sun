package com.helloxyy.sun.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by xyy on 16-12-28.
 */

@RestController
public class BlogController {

    @RequestMapping("/1")
    public String hello() {

        return "你好";
    }
}
