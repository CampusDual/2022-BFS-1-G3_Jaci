package jaci.jaci.tienda.model.core.dao;


import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;


@Lazy
@Repository(value = "ProductDao")
@ConfigurationFile(
        configurationFile = "dao/ProductDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class ProductDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_ID            = "ID";
    public static final String ATTR_PHOTO         = "PHOTO";
    public static final String ATTR_DESCRIPTION   = "DESCRIPTION";
    public static final String ATTR_STOCK         = "STOCK";
    public static final String ATTR_PRICE         = "PRICE";
    public static final String ATTR_ON_SALE       = "ON_SALE";
    public static final String QUERY_LESS_THAN_5  = "LESS_THAN_5";
    public static final String ATTR_NAME          = "NAME";

    public ProductDao() {
        super();
    }

}