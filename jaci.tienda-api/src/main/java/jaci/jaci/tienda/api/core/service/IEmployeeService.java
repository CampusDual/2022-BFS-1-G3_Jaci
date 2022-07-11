package jaci.jaci.tienda.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.jee.common.dto.EntityResult;


public interface IEmployeeService {

    public EntityResult employeeQuery(Map<?, ?> keyMap, List<?> attrList);
    public EntityResult employeeInsert(Map<?, ?> attrMap);
    public EntityResult employeeUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
    public EntityResult employeeDelete(Map<?, ?> keyMap);

}