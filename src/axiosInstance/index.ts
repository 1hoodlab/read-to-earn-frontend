import { api_url } from "@/constant/network";
import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: api_url,
});

export default AxiosInstance;
