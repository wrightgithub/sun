package com.helloxyy.sun.controller;

import com.helloxyy.sun.mapper.ArticleMapper;
import com.helloxyy.sun.modle.ArticleDo;
import com.helloxyy.sun.utils.Debug;
import com.helloxyy.sun.utils.FileUtil;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;
import java.util.UUID;

/**
 * Created by xyy on 17-1-1.
 */

@RestController
public class AdminController {

    private static Logger logger = Logger.getLogger(AdminController.class);

    @Value("${blog.path}")
    private String        blogPath;

    @Autowired
    private ArticleMapper articleMapper;

    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    public boolean submitArticles(@RequestBody Map<String, String> data) {

        try {
            ArticleDo article = new ArticleDo();
            article.setTitle(data.get("title"));
            article.setDate(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
            article.setDigest(data.get("digest"));
            article.setImgSrc(data.get("imgsrc"));
            article.setLink(data.get("link"));
            article.setType(Integer.parseInt(data.get("type")));
            if ("1".equals(data.get("type"))) {
                article.setLink("/originalBlog?id=");
                // TODO: 17-1-2 path
                String time = new SimpleDateFormat("yyyy-MM-dd").format(new Date()).toString();
                String path = blogPath + time + "/" + UUID.randomUUID() + ".md";
                article.setPath(path);
                FileUtil.write(path, data.get("content").getBytes());
            }
            articleMapper.insert(article);
            Debug.debug("id=" + article.getId());
            return true;
        } catch (NumberFormatException e) {
            logger.error(e.getMessage(), e);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }
        return false;
    }

}
