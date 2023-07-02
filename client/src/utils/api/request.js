import axios from "axios";
import { checkToken } from "./checkToken";

const request = async ({ url, method = "GET", body, headers } = {}) => {
  const token = window.localStorage.getItem("token");

  axios.defaults.baseURL = "https://technokit-store.onrender.com/";
  axios.defaults.headers.post["Content-Type"] = "application/json";

  if (token) {
    checkToken(token);
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
