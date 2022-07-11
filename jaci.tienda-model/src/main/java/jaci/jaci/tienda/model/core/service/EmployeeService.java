package jaci.jaci.tienda.model.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import jaci.jaci.tienda.api.core.service.IEmployeeService;
import jaci.jaci.tienda.model.core.dao.EmployeeDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Map;

@Lazy
@Service("EmployeeService")
public class EmployeeService implements IEmployeeService {

    @Autowired
    private EmployeeDao employeeDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult employeeQuery(Map<?, ?> keyMap, List<?> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.employeeDao, keyMap, attrList);
    }

    @Override
    public EntityResult employeeInsert(Map<?, ?> attrMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.employeeDao, attrMap);
    }

    @Override
    public EntityResult employeeUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.employeeDao, attrMap, keyMap);
    }

    @Override
    public EntityResult employeeDelete(Map<?, ?> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.employeeDao, keyMap);
    }
}
