import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const axiosApi = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem("token");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Response Interceptor
axiosApi.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: any) => {
    return Promise.reject(error);
  }
);

export default axiosApi;
