import axios from "axios";

const axiosConfig = axios.create({
    baseURL: 'http://127.0.0.1:5000/api',
    // baseURL: 'https://sicsdev.com/wishtrax/api',
});
export default axiosConfig;