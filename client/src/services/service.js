import http from "../http-common";

class DataService {
    helloWorld() {
        return http.get(`/`)
    }
}

export default new DataService();