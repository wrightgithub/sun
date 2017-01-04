package com.helloxyy.sun.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by xyy on 16-12-28.
 */
@Controller
@RequestMapping(value = "/", produces = "text/html;charset=UTF-8")
public class ScreenController {

    @Value("${blog.path}")
    private String blogPath;

    @RequestMapping(value = { "/", "/index" })
    public String index(ModelMap context) {

        context.put("name", "程序员的微生活");
        return "screen/index";
    }

    @RequestMapping("/originalBlog")
    public String loadMyBlog(@RequestParam String id, ModelMap context) {

        context.put("id", id);

        return "screen/originalBlog";
    }

    @RequestMapping(value = "/admin/submitArticles", produces = "text/html;charset=UTF-8")
    public String submitArticlesView(ModelMap context) {

        return "screen/admin/submitArticles";
    }

    @RequestMapping(value = "/admin/writeBlog", produces = "text/html;charset=UTF-8")
    public String writeBlog(ModelMap context) {

        return "screen/admin/writeBlog";
    }
}
