import Cookies from "js-cookie";

export const setToken = (data) => {
  Cookies.set("username", data.user.username);
  Cookies.set("jwt", data.jwt);
};

export const unsetToken = () => {
  Cookies.remove("jwt");
  Cookies.remove("username");
};

export const getTokenFromLocalCookie = () => {
  return Cookies.get("jwt");
};

export const getUserFromLocalCookie = () => {
  return Cookies.get("username");
};
