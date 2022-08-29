import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://127.0.0.1:5000";

class ChessMateApi {
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
    }
  }

  static async signup(username, password) {
    const data = { username, password };
    const endpoint = "signup";
    const res = await this.request(endpoint, data, "post");
    return res;
  }

  static async login(username, password) {
    const data = { username, password };
    const endpoint = "login";
    const res = await this.request(endpoint, data, "post");
    return res;
  }
}

export default ChessMateApi;
