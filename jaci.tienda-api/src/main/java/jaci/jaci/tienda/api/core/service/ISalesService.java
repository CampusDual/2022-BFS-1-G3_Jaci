package jaci.jaci.tienda.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface ISalesService {
	
	// SALES
	 public EntityResult salesQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
	 public EntityResult salesInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
	 public EntityResult salesUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	 public EntityResult salesDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

}
