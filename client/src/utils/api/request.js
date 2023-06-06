import axios from "axios";
import jwtDecode from "jwt-decode";
import { setAuthToken } from "./setAuthToken";

const request = async ({ url, method = "GET", body, headers } = {}) => {
  const token = window.localStorage.getItem("token");
  const decoded = token ? jwtDecode(token) : null;

  axios.defaults.baseURL = "http://localhost:4000/api";
  axios.defaults.headers.post["Content-Type"] = "application/json";

  if (token) {
    setAuthToken(token);
    console.log(decoded);
  }

  const fetchData = () => {
    if (method === "GET") return axios.get(url, { params: body });
    return axios({ url, method, data: body, headers });
  };

  try {
    const { data, status } = await fetchData();

    return { res: data, status };
  } catch ({ response }) {
    return { err: response };
  }
};

export default request;
