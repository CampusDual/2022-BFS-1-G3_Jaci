package jaci.jaci.tienda.ws.core.rest;

import jaci.jaci.tienda.api.core.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/employees")
public class EmployeeRestController extends ORestController<IEmployeeService> {

    @Autowired
    private IEmployeeService employeeService;

    @Override
    public IEmployeeService getService() {
        return this.employeeService;
    }
}
