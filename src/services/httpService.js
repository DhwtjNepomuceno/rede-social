import axios from "axios";

export class HttpService {
  constructor(baseURL = "http://localhost:3000") {
    this.baseUrl = baseURL;
    this.instance = axios.create({ baseURL: this.baseUrl });
  }
  async request(metodo, urlPath, dado = null) {
    const config = {
      method: metodo,
      url: urlPath,
    };
    if (dado) {
      config.data = dado;
    }
    return this.instance(config);
  }
}
