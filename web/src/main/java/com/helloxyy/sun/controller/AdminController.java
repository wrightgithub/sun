package com.helloxyy.sun.controller;

import com.helloxyy.sun.modle.ArticleDo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * Created by xyy on 17-1-1.
 */

@Controller
public class AdminController {

    @RequestMapping(value = "/admin", produces = "text/html;charset=UTF-8")
    public String submitArticlesView(ModelMap context) {

        return "screen/admin";
    }

    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    @ResponseBody
    public String submitArticles(@RequestBody Map<String, Object> data) {
        ArticleDo article = new ArticleDo();

        System.out.println(data);
        // article.setTitle();
        return "true";
    }
}
