package jaci.jaci.tienda.api.core.service;


import java.util.List;
import java.util.Map;

import com.ontimize.jee.common.dto.EntityResult;


public interface IProductService {

    public EntityResult productQuery(Map<?, ?> keyMap, List<?> attrList);
    public EntityResult productInsert(Map<?, ?> attrMap);
    public EntityResult productUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
    public EntityResult productDelete(Map<?, ?> keyMap);

}