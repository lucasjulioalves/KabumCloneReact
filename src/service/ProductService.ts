import apiConstants from "../constant/ApiConstants";
import FetchService from "./FetchService";

class ProductService {

    _service: FetchService = new FetchService();

    fetchMainProducts() {
        return this._service.fetch(apiConstants.products.v1.main)
    }
}

export default ProductService;