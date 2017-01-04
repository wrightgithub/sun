package com.helloxyy.sun.service;

import com.helloxyy.sun.mapper.ArticleMapper;
import com.helloxyy.sun.modle.ArticleDo;
import com.helloxyy.sun.utils.ArticleType;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by xyy on 17-1-2.
 */
@Service
public class ArticleService {

    private static Logger logger = Logger.getLogger(ArticleService.class);

    @Autowired
    private ArticleMapper articleMapper;

    public List<ArticleDo> getArticle(ArticleType type) {

        try {
            List<ArticleDo> list = articleMapper.findAll();
            return list.stream().filter(article -> article.getType() == type.getValue()).collect(Collectors.toList());
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }

        return null;
    }

    public List<ArticleDo> findByTitle(String title) {
        List<ArticleDo> list = null;
        try {
            list = articleMapper.findByTitle(title);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }

        return list;
    }

    public List<ArticleDo> findById(int id) {
        List<ArticleDo> list = null;
        try {
            list = articleMapper.findById(id);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }

        return list;
    }
}
