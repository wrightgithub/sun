package com.helloxyy.sun.utils;

/**
 * Created by xyy on 17-1-2.
 */
public enum ArticleType {
    SHARE(0),
    ORIGINAL(1);

    private int value;
    ArticleType(int i) {
        this.value=i;
    }

    public int getValue() {
        return value;
    }
}
