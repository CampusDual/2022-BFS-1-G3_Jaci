package jaci.jaci.tienda.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("ClientsDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ClientsDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ClientsDao extends OntimizeJdbcDaoSupport {

 public static final String ATTR_ID ="id";
 public static final String ATTR_NAME ="name";
 public static final String ATTR_SURNAME1 ="surname1";
 public static final String ATTR_SURNAME2 ="surname2";
 public static final String ATTR_EMAIL ="email";
 public static final String ATTR_BANK_CCOUNT ="bank_account";
 public static final String QUERY_CREDIT_NUMBER = "credit_number";
 public static final String QUERY_PASSWORD = "password";
  
}