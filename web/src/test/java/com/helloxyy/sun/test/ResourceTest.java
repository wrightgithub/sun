package com.helloxyy.sun.test;

import com.helloxyy.sun.BootStrap;
import com.helloxyy.sun.utils.FileUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

/**
 * Created by xyy on 17-1-1.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = BootStrap.class)
@WebAppConfiguration
public class ResourceTest {

    @Test
    public void test1() throws IOException {
        Resource resource = new ClassPathResource("/blog/test.md");
        String fileName = resource.getFilename();
        System.out.println(fileName);
        System.out.println(resource.getURL());
        System.out.println(resource.getURI());
        // if (resource.isReadable()) {
        // //每次都会打开一个新的流
        // InputStream is = resource.getInputStream();
        // this.printContent(is);
        // }

        String content = FileUtil.read(resource.getFile());
        System.out.println(content);
    }

    @Test
    public void test2() throws Exception{
        System.out.println(FileUtil.readRelativeFile("/blog/test.md"));
    }


    private void printContent(InputStream is) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String line;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
        if (is != null) {
            is.close();
        }
        if (br != null) {
            br.close();
        }
    }

}
