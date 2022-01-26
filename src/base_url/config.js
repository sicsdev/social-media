import axios from "axios";

const axiosConfig = axios.create({
    // baseURL: 'http://127.0.0.1:5000/api',
    baseURL: 'https://flaskbackend-819s7ioq7-sicsdev21.vercel.app/api',
});
export default axiosConfig;