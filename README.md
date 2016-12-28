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
