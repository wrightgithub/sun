package com.helloxyy.sun.mapper;

import com.helloxyy.sun.modle.ArticleDo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by xyy on 17-1-1.
 */
@Mapper
public interface ArticleMapper {

    List<ArticleDo> findAll();

    void insert(@Param("article") ArticleDo article);
}
