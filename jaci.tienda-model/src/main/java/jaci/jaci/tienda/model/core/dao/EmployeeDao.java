package jaci.jaci.tienda.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;


@Lazy
@Repository(value = "EmployeeDao")
@ConfigurationFile(
        configurationFile = "dao/EmployeeDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class EmployeeDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_ID            = "ID";
    public static final String ATTR_NAME   = "NAME";
    public static final String ATTR_SURNAME1         = "SURNAME1";
    public static final String ATTR_SURNAME2         = "SURNAME1";
    public static final String ATTR_TELEPHONE   = "TELEPHONE";
    public static final String ATTR_EMAIL       = "EMAIL";
    public static final String ATTR_DIRECTION       = "DIRECTION";
    public static final String ATTR_BANK_ACCOUNT       = "BANK_ACCOUNT";
    public static final String ATTR_IS_ADMIN       = "IS_ADMIN";
    public static final String ATTR_PASSWORD       = "PASSWORD";


}