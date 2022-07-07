package jaci.jaci.tienda.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jaci.jaci.tienda.api.core.service.ISalesService;

import com.ontimize.jee.server.rest.ORestController;



@RestController
@RequestMapping("/sales")

public class SalesRestController extends ORestController<ISalesService> {
	
	 @Autowired
	 private ISalesService salesService;

	 @Override
	 public ISalesService getService() {
	  return this.salesService;
	 }
	 

}
