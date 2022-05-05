import axios, { AxiosInstance } from "axios";
class RequestConfig {
  protected api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
    });
  }
}

export default RequestConfig;
