import axios from "axios"; 

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_HOST_API_KEY || ""
});
axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
axiosInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || "Something went wrong")
);


export default axiosInstance;
