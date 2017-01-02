package com.helloxyy.sun.config;

import org.apache.commons.dbcp2.BasicDataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import javax.sql.DataSource;

/**
 * Created by xyy on 17-1-1.
 */

@Configuration
@MapperScan(basePackages = SunConfig.PACKAGE, sqlSessionFactoryRef = "sunSessionFactory")
public class SunConfig  {
    static final String PACKAGE = "com.helloxyy.sun.mapper";

    @Value("${db.sun.name}")
    private String      name;
    @Value("${db.sun.password}")
    private String      password;
    @Value("${db.sun.url}")
    private String     sunUrl;
    @Value("${db.jdbc.driver.class}")
    private String      driverClass;


    @Bean(name = "sunDataSource")
    public DataSource sakilaMasterDataSource() {
        BasicDataSource dataSource = new BasicDataSource();
        dataSource.setDriverClassName(driverClass);
        dataSource.setUrl(sunUrl);
        dataSource.setUsername(name);
        dataSource.setPassword(password);

        return dataSource;
    }

//    @Bean(name = "transactionManager")
//    public DataSourceTransactionManager transactionManager(@Qualifier("sunDataSource") DataSource dataSource) throws Exception {
//        DataSourceTransactionManager transactionManager = new DataSourceTransactionManager();
//        transactionManager.setDataSource(dataSource);
//        return transactionManager;
//    }


    @Bean(name = "sunSessionFactory")
    public SqlSessionFactory sakilaSqlSessionFactory(@Qualifier("sunDataSource") DataSource dataSource) throws Exception {
        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource);
        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        sessionFactory.setMapperLocations(resolver.getResources("classpath:/mapper/*.xml"));
        sessionFactory.setTypeAliasesPackage("com.helloxyy.sun.modle");
        return sessionFactory.getObject();
    }

}
