import axios from "axios";

export default axios.create({
  baseURL: "http://api.algorithmic.uz/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    "Cache-Control": "no-cache",
  },
});
