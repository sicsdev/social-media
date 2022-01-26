import axios from "axios";

const axiosConfig = axios.create({
    // baseURL: 'http://127.0.0.1:5000/api',
    baseURL: 'https://8m1cviu9u3.execute-api.us-east-1.amazonaws.com/dev/api',
});
export default axiosConfig;