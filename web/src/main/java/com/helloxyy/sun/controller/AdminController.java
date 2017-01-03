package com.helloxyy.sun.controller;

import com.helloxyy.sun.mapper.ArticleMapper;
import com.helloxyy.sun.modle.ArticleDo;
import com.helloxyy.sun.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * Created by xyy on 17-1-1.
 */

@Controller
public class AdminController {

    @Autowired
    private ArticleMapper articleMapper;

    @Autowired
    private ArticleService articleService;

    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    @ResponseBody
    public boolean submitArticles(@RequestBody Map<String, String> data) {

        try {
            ArticleDo article = new ArticleDo();
            article.setTitle(data.get("title"));
            article.setDate(data.get("date"));
            article.setDigest(data.get("digest"));
            article.setImgSrc(data.get("imgsrc"));
            article.setLink(data.get("link"));
            article.setType(Integer.parseInt(data.get("type")));
            if ("1".equals(data.get("type"))) {
              // // TODO: 17-1-2 path
            }
            System.out.println(data);
            articleMapper.insert(article);
            return true;
        } catch (NumberFormatException e) {
            e.printStackTrace();
        }
        return false;
    }
}
