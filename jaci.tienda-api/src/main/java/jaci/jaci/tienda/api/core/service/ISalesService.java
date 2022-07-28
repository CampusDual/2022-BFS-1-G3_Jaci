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
	 public EntityResult saleChartQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
	 public EntityResult incomeChartQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
	 public EntityResult vSalesClientsQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;
	 public EntityResult vSalesClientsDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;
	 public EntityResult vSalesProductQuery(Map<String, Object> keysValues, List<String> attributes) throws OntimizeJEERuntimeException;
	 public EntityResult vSalesProductDelete(Map<String, Object> keyValues) throws OntimizeJEERuntimeException;
}
