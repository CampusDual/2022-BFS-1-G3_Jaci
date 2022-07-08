package jaci.jaci.tienda.model.core.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import jaci.jaci.tienda.api.core.service.IClientsService;
import jaci.jaci.tienda.model.core.dao.ClientsDao;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;


@Lazy
@Service("ClientsService")
public class ClientsService implements IClientsService {

	@Autowired
	private ClientsDao clientsDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;
	@Override
	public EntityResult clientsQuery(Map<String, Object> keyMap, List<String> attrList)
			   throws OntimizeJEERuntimeException {
		  return this.daoHelper.query(this.clientsDao, keyMap, attrList);
	}
	@Override
	public EntityResult clientsInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		  return this.daoHelper.insert(this.clientsDao, attrMap);
	}
	@Override
	public EntityResult clientsUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		  return this.daoHelper.update(this.clientsDao, attrMap, keyMap);
	}
	@Override
	public EntityResult clientsDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		  return this.daoHelper.delete(this.clientsDao, keyMap);
	}

}