package com.helloxyy.sun.controller;

import com.alibaba.fastjson.JSON;
import com.helloxyy.sun.module.Article;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by xyy on 16-12-28.
 */

@Controller
public class BlogController {
    @RequestMapping(value = "/2")
    public String hello() {
        return "hello";
    }

    @RequestMapping(value = "/articles",produces = "application/json;charset=UTF-8")
    @ResponseBody()
    public String articles() {
        List<Article> list = new ArrayList<>();
        for (int i = 0; i < 8; i++) {
            Article article = new Article(new Date().toString(), "摘要" + i, "/static/img/client" + i + ".png",
                    "title" + i);
            list.add(article);
        }
        return JSON.toJSONString(list);
    }

}
