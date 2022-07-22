	package jaci.jaci.tienda.model.core.dao;

	import org.springframework.context.annotation.Lazy;
	import org.springframework.stereotype.Repository;

	import com.ontimize.jee.server.dao.common.ConfigurationFile;
	import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

	@Repository("WorkersDao")
	@Lazy
	@ConfigurationFile(configurationFile = "dao/WorkersDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
	public class  WorkersDao extends OntimizeJdbcDaoSupport {

	 public static final String ATTR_ID ="id";
	 public static final String ATTR_NAME ="name";
	 public static final String ATTR_SURNAME ="surname";
	 public static final String ATTR_SURNAME2 ="surname2";
	 public static final String ATTR_TELEPHONE ="telephone";
	 public static final String ATTR_EMAIL ="email";
	 
	}

