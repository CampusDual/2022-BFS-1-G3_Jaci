package jaci.jaci.tienda.ws.core.rest;

import jaci.jaci.tienda.api.core.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/products")
public class ProductRestController extends ORestController<IProductService> {

    @Autowired
    private IProductService productService;

    @Override
    public IProductService getService() {
        return this.productService;
    }
}