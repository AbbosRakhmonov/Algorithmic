import axios from "axios";

const http = axios.create({
  baseURL: "http://api.algorithmic.uz/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Cache-Control": "no-cache",
  },
});
http.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("accessToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default http;
