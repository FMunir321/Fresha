// utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    // Example: Adding authorization token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const { response } = error;
    if (response) {
      switch (response.status) {
        case 403:
          alert('You do not have permission to access this resource.');
          break;
        case 500:
          alert('An internal server error occurred. Please try again later.');
          break;
        // Add more cases as needed
        default:
          alert(`An error occurred: ${response.status}`);
      }
    } else {
      alert('An unexpected error occurred. Please check your internet connection.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
