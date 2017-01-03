package com.helloxyy.sun.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.helloxyy.sun.modle.ArticleDo;
import com.helloxyy.sun.module.Article;
import com.helloxyy.sun.service.ArticleService;
import com.helloxyy.sun.utils.ArticleType;
import com.helloxyy.sun.utils.ConvertUtil;
import com.helloxyy.sun.utils.FileUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

/**
 * Created by xyy on 16-12-28.
 */

@RestController
public class BlogController {

    @Value("${blog.path}")
    private String         blogPath;

    @Autowired
    private ArticleService articleService;

    @RequestMapping(value = "/articles", produces = "application/json;charset=UTF-8")
    public String articles() {

        ArrayList<Article> retList = new ArrayList<>();
        List<ArticleDo> shareList = null;
        try {
            shareList = articleService.getArticle(ArticleType.SHARE);

            // if (shareList == null) {
            // return null;
            // }
            // int size = shareList.size();
            // if (size <= 4) {
            // return JSON.toJSONString(shareList, SerializerFeature.DisableCircularReferenceDetect);
            // }

            // int n = 4;
            // while (n-- > 0) {
            // int i = new Random().nextInt(size);
            // retList.add(ConvertUtil.convertToArticle(shareList.get(i)));
            // }

        } catch (Exception e) {
            e.printStackTrace();
        }
        // 来禁止循环引用检测：SerializerFeature.DisableCircularReferenceDetect
        return JSON.toJSONString(shareList, SerializerFeature.DisableCircularReferenceDetect);

    }

    @RequestMapping(value = "/original", produces = "application/json;charset=UTF-8")
    public String original() {

        List<ArticleDo> originalBlog = null;
        try {

            originalBlog = articleService.getArticle(ArticleType.ORIGINAL);
        } catch (Exception e) {
            e.printStackTrace();
        }
        // 来禁止循环引用检测：SerializerFeature.DisableCircularReferenceDetect
        return JSON.toJSONString(originalBlog, SerializerFeature.DisableCircularReferenceDetect);

    }

    @RequestMapping(value = "/originaldetail", produces = "text/html;charset=UTF-8")
    public String originalDetail() {

        String blog = "";
        try {
            blog = FileUtil.read(blogPath + "test.md");
        } catch (IOException e) {
            e.printStackTrace();
        }

        return blog;
    }

}
