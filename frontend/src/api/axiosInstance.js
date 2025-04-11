// src/api/axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',          // ✅ Local dev will proxy this to http://localhost:5000
  withCredentials: true,    // ✅ Required if using auth/cookies
});

export default instance;
