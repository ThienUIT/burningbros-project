import axios from "axios";

const index = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

index.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log("axios request error: ", error);
    return Promise.reject(error);
  },
);

index.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log("axios response error: ", error);
    return Promise.reject(error);
  },
);

export default index;
