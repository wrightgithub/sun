package com.helloxyy.sun.test;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by xyy on 17-1-6.
 */
public class DailyTest {

    public static void main(String[] args) throws ParseException {

        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        Date date=df.parse("2017-01-04 21:38:20");

            System.out.println(date);


    }
}
