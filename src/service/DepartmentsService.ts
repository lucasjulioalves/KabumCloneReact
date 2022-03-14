import apiConstants from "../constant/ApiConstants";
import FetchService from "./FetchService";

class DepartmentsService {

    _service: FetchService = new FetchService();

    fetchDeparments() {
        return this._service.fetch(apiConstants.deparments.v1.main);
    }
}

export default DepartmentsService;