package jaci.jaci.tienda.ws.core.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jaci.jaci.tienda.api.core.service.IClientsService;
import com.ontimize.jee.server.rest.ORestController;


@RestController
@RequestMapping("/clients")
public class ClientsRestController extends ORestController<IClientsService> {

	@Autowired
	private IClientsService clientsSrv;

	@Override
	public IClientsService getService() {
		return this.clientsSrv;
	}

	

}