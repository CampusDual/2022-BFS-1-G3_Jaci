package jaci.jaci.tienda.model.core.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import jaci.jaci.tienda.api.core.service.IClientsService;
import jaci.jaci.tienda.api.core.service.IWorkersService;
import jaci.jaci.tienda.model.core.dao.WorkersDao;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;


@Lazy
@Service("WorkersService")
public class WorkersService implements IWorkersService {

	@Autowired
	private WorkersDao WorkersDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	@Override
	public EntityResult workerQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.WorkersDao, keyMap, attrList);
	}

	@Override
	public EntityResult workerInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.WorkersDao, attrMap);
	}

	@Override
	public EntityResult workerUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.WorkersDao, attrMap, keyMap);
	}

	@Override
	public EntityResult workerDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.WorkersDao, keyMap);
	}

}