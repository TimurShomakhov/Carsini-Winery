// src/api/axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // ✅ Point to your backend
  withCredentials: true,                // ✅ Needed for cookies/auth headers
});

export default instance;
