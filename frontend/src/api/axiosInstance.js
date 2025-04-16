import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://carsini-winery-backend.onrender.com/api', 
  withCredentials: true, 
});

export default axiosInstance;
