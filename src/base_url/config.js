import axios from "axios";

const axiosConfig = axios.create({
    baseURL: 'http://127.0.0.1:5000/api',
    // baseURL: 'http://2e39-122-173-24-201.ngrok.io/api',
});
export default axiosConfig;