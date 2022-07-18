import axios from "axios";

const service = axios.create({
  baseURL: "/api-3d", // url = base url + request url
  timeout: 60 * 1000,
  withCredentials: true, // send cookies when cross-domain requests
  headers: {},
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.status !== 0) {
      return Promise.reject(response.data);
    } else {
      return response.data;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
