package com.helloxyy.sun.service;

import com.helloxyy.sun.mapper.ArticleMapper;
import com.helloxyy.sun.modle.ArticleDo;
import com.helloxyy.sun.utils.ArticleType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by xyy on 17-1-2.
 */
@Service
public class ArticleService {

    @Autowired
    private ArticleMapper articleMapper;

    public List<ArticleDo> getArticle(ArticleType type) {


        try {
            List<ArticleDo> list = articleMapper.findAll();
            return list.stream()
                    .filter(article -> article.getType() == type.getValue())
                    .collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }
}
