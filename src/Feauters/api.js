import axios from "axios";
const url = "http://api.algorithmic.uz/api";

const Api = (contentType = "application/json") => {
  const headers = {
    "Content-Type": contentType,
    Accept: "application/json",
    "Cache-Control": "no-cache",
  };
  const token = localStorage.getItem("accessToken");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: url,
    headers: headers,
  });
};

export default Api;
