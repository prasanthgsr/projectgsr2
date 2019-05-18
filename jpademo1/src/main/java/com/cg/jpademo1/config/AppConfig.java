package com.cg.jpademo1.config;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@ComponentScan("com.cg")
@EnableTransactionManagement
public class AppConfig {
       //1:Data Source Bean
	@Bean
	public DataSource ds() {
		DriverManagerDataSource ds=new DriverManagerDataSource();
		ds.setDriverClassName("oracle.jdbc.OracleDriver");
		ds.setUsername("trg517");
		ds.setPassword("training517");
		ds.setUrl("jdbc:oracle:thin:@10.219.34.3:1521:orcl");
		return ds;
		
	}
	//2:EntityManagerFactory Bean
	@Bean
	public LocalContainerEntityManagerFactoryBean factory() {
		LocalContainerEntityManagerFactoryBean factory=
				    new LocalContainerEntityManagerFactoryBean();
		factory.setDataSource(ds());
		factory.setPackagesToScan("com.cg.jpademo1.entities");
		factory.setPersistenceProviderClass(org.hibernate.jpa.HibernatePersistenceProvider.class);
		
		
		factory.getJpaPropertyMap()
		.put("hibernate.dialect","org.hibernate.dialect.OracleDialect");
		factory.getJpaPropertyMap()
		.put("hibernate.hbm2ddl.auto","create-drop");
	
	return factory;
}

@Bean
public PlatformTransactionManager transactionManager() {
	
	JpaTransactionManager tm = new JpaTransactionManager();
	tm.setEntityManagerFactory(
			factory().getObject());
	return tm;
}

		
		
		
		
		
		
		
		
		
		
	}

