package jaci.jaci.tienda.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;


public interface IWorkersService {

	EntityResult workerQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
	  EntityResult workerInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
	  EntityResult workerUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	  EntityResult workerDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
}
