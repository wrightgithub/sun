package com.helloxyy.sun.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.helloxyy.sun.module.Article;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

/**
 * Created by xyy on 16-12-28.
 */

@RestController
public class BlogController {

    @RequestMapping(value = "/2")
    public String hello() {
        return "hello";
    }

    @RequestMapping(value = "/articles", produces = "application/json;charset=UTF-8")
    public String articles() {
        ArrayList<Article> retList = new ArrayList<>();
        List<Article> list = new ArrayList<>();
        try {

            for (int i = 0; i < 8; i++) {
                Article article = new Article(new Date().toString(), "摘要" + i, "/static/img/client" + (i + 1) + ".png",
                                              "title" + i);
                list.add(article);
            }

            int n = 4;
            while (n-- > 0) {
                int i = new Random().nextInt(7);
                retList.add(list.get(i));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        //来禁止循环引用检测：SerializerFeature.DisableCircularReferenceDetect
        return JSON.toJSONString(retList,SerializerFeature.DisableCircularReferenceDetect);

    }


    @RequestMapping(value ="original",produces = "application/json;charset=UTF-8")
    public String original() {

        ArrayList<Article> retList = new ArrayList<>();
        List<Article> list = new ArrayList<>();
        try {

            for (int i = 0; i < 8; i++) {
                Article article = new Article(new Date().toString(), "摘要" + i, "/static/img/client" + (i + 1) + ".png",
                        "title" + i);
                list.add(article);
            }

            int n = 4;
            while (n-- > 0) {
                int i = new Random().nextInt(7);
                retList.add(list.get(i));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        //来禁止循环引用检测：SerializerFeature.DisableCircularReferenceDetect
        return JSON.toJSONString(retList,SerializerFeature.DisableCircularReferenceDetect);
    }


}
