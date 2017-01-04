package com.helloxyy.sun.util;

/**
 * Created by xyy on 17-1-4.
 */
public class Debug {

    private static boolean openDebug = true;

    public static void debug(String str) {
        if (openDebug == true) {
            System.out.println(str);
        }
    }
}
