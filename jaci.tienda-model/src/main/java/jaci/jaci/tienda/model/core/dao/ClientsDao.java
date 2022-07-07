package jaci.jaci.tienda.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("ClientsDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ClientsDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ClientsDao extends OntimizeJdbcDaoSupport {

 public static final String ATTR_ID ="ID";
 public static final String ATTR_NAME ="NAME";
 public static final String ATTR_SURNAME1 ="SURNAME1";
 public static final String ATTR_SURNAME2 ="SURNAME2";
 public static final String ATTR_EMAIL ="EMAIL";
 public static final String ATTR_BANK_CCOUNT ="BANK_CCOUNT";
 public static final String QUERY_CREDIT_NUMBER = "CREDIT_NUMBER";
 public static final String QUERY_PASSWORD = "PASSWORD";
  
}