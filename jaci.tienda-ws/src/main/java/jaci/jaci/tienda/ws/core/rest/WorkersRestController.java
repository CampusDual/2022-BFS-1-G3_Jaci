package jaci.jaci.tienda.ws.core.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jaci.jaci.tienda.api.core.service.IClientsService;
import jaci.jaci.tienda.api.core.service.IWorkersService;

import com.ontimize.jee.server.rest.ORestController;


@RestController
@RequestMapping("/workers")
public class WorkersRestController extends ORestController<IWorkersService> {

	@Autowired
	private IWorkersService workersSrv;

	@Override
	public IWorkersService getService() {
		return this.workersSrv;
	}

	

}