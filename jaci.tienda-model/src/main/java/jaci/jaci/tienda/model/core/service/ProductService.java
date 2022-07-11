package jaci.jaci.tienda.model.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import jaci.jaci.tienda.api.core.service.IProductService;
import jaci.jaci.tienda.model.core.dao.ProductDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;

@Lazy
@Service("ProductService")
public class ProductService implements IProductService {

    @Autowired
    private ProductDao productDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult productQuery(Map<?, ?> keyMap, List<?> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.productDao, keyMap, attrList);
    }

    @Override
    public EntityResult productInsert(Map<?, ?> attrMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.productDao, attrMap);
    }

    @Override
    public EntityResult productUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.productDao, attrMap, keyMap);
    }

    @Override
    public EntityResult productDelete(Map<?, ?> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.productDao, keyMap);
    }

    @Override
    public EntityResult lessProductQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(this.productDao, keyMap, attrList, ProductDao.QUERY_LESS_THAN_5);
    }
}
