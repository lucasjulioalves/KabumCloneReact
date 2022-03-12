import ProductApiConstant from "../constant/ProductApiConstant";
import FetchService from "./FetchService";

class ProductService {

    _service: FetchService = new FetchService();

    fetchMainProducts() {
        return this._service.fetch(ProductApiConstant.product.v1.main)
    }
}

export default ProductService;