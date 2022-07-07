package jaci.jaci.tienda.api.core.service;


import java.util.List;
import java.util.Map;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;


public interface IClientsService {

	  EntityResult clientsQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
	  EntityResult clientsInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
	  EntityResult clientsUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	  EntityResult clientsDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
}