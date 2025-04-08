// src/api/axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://carsini-backend.onrender.com/api', // 🟢 Your live backend URL
  withCredentials: true,                               // ✅ Keep this for auth/cookies
});

export default instance;
