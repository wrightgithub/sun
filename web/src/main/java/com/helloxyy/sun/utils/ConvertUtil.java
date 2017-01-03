package com.helloxyy.sun.utils;

import com.helloxyy.sun.modle.ArticleDo;
import com.helloxyy.sun.module.Article;

/**
 * Created by xyy on 17-1-2.
 */
public class ConvertUtil {

    public static Article  convertToArticle(ArticleDo  articleDo){

        Article article=new Article();
        article.setTitle(articleDo.getTitle());
        article.setDigest(articleDo.getDigest());
        article.setDate(articleDo.getDate());
        article.setImgSrc(articleDo.getImgSrc());
        article.setLink(articleDo.getLink());

        return article;
    }

}

