package com.helloxyy.sun.module;

import java.io.Serializable;

/**
 * Created by xyy on 16-12-30.
 */
public class Article implements Serializable {

    private String imgSrc;
    private String date;
    private String title;
    private String digest;// 摘要

    public Article(String date, String digest, String imgSrc, String title) {
        this.date = date;
        this.digest = digest;
        this.imgSrc = imgSrc;
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDigest() {
        return digest;
    }

    public void setDigest(String digest) {
        this.digest = digest;
    }

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

}
