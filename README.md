# sun

# 遇到的一些问题
1. 中文乱码的问题
    + html乱码可以在html页面设置
    ```
    <html lang="zh">
      <meta charset="utf-8"/>
    ```
    + 数据响应乱码
    ```
    @RequestMapping(value = "/",produces = "text/html;charset=UTF-8")
    ```
    + 请求乱码(这次没遇到，不过记下以后参考)
    ```
    @Bean
    @Order(Ordered.HIGHEST_PRECEDENCE)
    CharacterEncodingFilter characterEncodingFilter() {
        CharacterEncodingFilter filter = new CharacterEncodingFilter();
        filter.setEncoding("UTF-8");
        filter.setForceEncoding(true);
        return filter;
    }
    ```
2. react 获取 form提交数据，用ref属性 比较方便。也可用state对一些关键属性的提交操作

3. react + webpack 模块化开发非常爽,做到了组件复用。

4. ajax --post-> springboot  
    + [springboot 配置](http://stackoverflow.com/questions/29313687/trying-to-use-spring-boot-rest-to-read-json-string-from-post)
    + 如何 需要send json   jquery 要配置"Content-Type": "application/json;charset=UTF-8"
      默认不是这个格式。
      [jquery 设置headers](http://www.cnblogs.com/itjeff/p/6007181.html)
5. SpringBoot下Mysql数据库的中文乱码问题分析
    + http://www.2cto.com/database/201609/543841.html
# 数据库设计



