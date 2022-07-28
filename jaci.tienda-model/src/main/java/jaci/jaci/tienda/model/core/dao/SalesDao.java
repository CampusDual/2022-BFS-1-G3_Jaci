package jaci.jaci.tienda.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("SalesDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/SalesDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")

public class SalesDao extends OntimizeJdbcDaoSupport{
	
	 public static final String QUERY_VSALESCLIENTS = "SALESCLIENTS";
	 public static final String QUERY_VSALESPRODUCT = "SALESPRODUCTS";
	 public static final String ATTR_ID = "SALES_ID";
	 public static final String ATTR_QUANTITY = "QUANTITY";
	 public static final String ATTR_PRICE = "PRICE";
	 public static final String ATTR_TOTAL = "TOTAL";
	 public static final String ATTR_PRODUCT_ID = "CLIENT_ID";
	 public static final String ATTR_COSTUMER_ID = "COSTUMER_ID";
	 public static final String ATTR_DATE = "DATE";
	 public static final String ATTR_IS_CONFIRM = "IS_CONFIRM";
	 public static final String QUERY_CHART = "CHART_DATA";
	 public static final String QUERY_AMOUNT_CHART = "CHART_AMOUNT";
	 public static final String QUERY_PRODUCT = "CHART_PRODUCT";
}
