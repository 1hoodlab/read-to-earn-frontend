import { api_url } from "@/constant/network";
import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: api_url,
});

AxiosInstance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token");
    config.headers["authorization"] = token ? token : "";
  }

  return config;
});
export default AxiosInstance;
