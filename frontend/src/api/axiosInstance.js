import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://carsini-winery-backend.onrender.com/api', // Replace with your actual backend URL!
  withCredentials: true,
});

export default instance;
