package com.helloxyy.sun.controller.test;

import com.alibaba.fastjson.JSON;
import com.helloxyy.sun.mapper.ArticleMapper;
import com.helloxyy.sun.modle.ArticleDo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by xyy on 17-1-2.
 */

@RestController
public class TestController {

    @Autowired
    private ArticleMapper articleMapper;

    @RequestMapping(value = "/sunsql", produces = "application/json;charset=UTF-8")
    public String sqltest() {

        List<ArticleDo> list = articleMapper.findAll();
        return JSON.toJSONString(list);
    }

}
