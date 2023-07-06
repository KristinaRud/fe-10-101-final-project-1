import jwtDecode from "jwt-decode";
import { setAuthToken } from "./setAuthToken";

export const checkToken = (token) => {
  if (token) {
    const decoded = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp > currentTime) {
      setAuthToken(token);
      return true;
    }
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("isAdmin");
    setAuthToken(false);
    return false;
  }
  return false;
};
