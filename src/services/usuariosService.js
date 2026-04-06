import { HttpService } from "./httpService";

export class UsuariosService {
    constructor() {
        this.http = new HttpService()
        this.url = "/usuarios"
    }

    get() {
       return this.http.request("GET", this.url)
    }
}