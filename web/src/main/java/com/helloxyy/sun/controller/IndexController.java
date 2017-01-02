package com.helloxyy.sun.controller;

import com.helloxyy.sun.utils.FileUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.*;

/**
 * Created by xyy on 16-12-28.
 */
@Controller
@RequestMapping(value = "/", produces = "text/html;charset=UTF-8")
public class IndexController {

    @Value("${blog.path}")
    private String blogPath;

    @RequestMapping(value = {"/","/index"})
    public String index(ModelMap context) {

        context.put("name", "程序员的微生活");
        return "screen/index";
    }

    @RequestMapping("/originalBlog")
    public String loadMyBlog(ModelMap context) {

        try {
            String blog= FileUtil.read(blogPath+"test.md");
            context.put("blog", blog);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "screen/originalBlog";
    }



    @RequestMapping("/1")
    @ResponseBody()
    public String button() {
        return "你好";
    }

    @RequestMapping("/test")
    @ResponseBody()
    public String mama(@RequestParam String name) {
        System.out.println(name);
        return "mama";
    }

}
